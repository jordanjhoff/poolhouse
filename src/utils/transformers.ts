import type { MatchV2 } from '@/generated/prisma/client';
import type { UserV2 } from '@/generated/prisma/client';

export function transformToMatchLine(match: MatchV2 & {
    player1: { name: string };
    player2: { name: string };
    winner: { name: string };
}) {
    const player1RatingChange = match.player1RatingAfter - match.player1RatingBefore;
    const player2RatingChange = match.player2RatingAfter - match.player2RatingBefore;

    const player1Str = `${match.player1.name} (${match.player1RatingBefore}) ${player1RatingChange >= 0 ? "+" : ""}${player1RatingChange}`;
    const player2Str = `${match.player2.name} (${match.player2RatingBefore}) ${player2RatingChange >= 0 ? "+" : ""}${player2RatingChange}`;

    const d = new Date(match.createdAt);
    const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const date = d.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
    const formattedDate = `${time}, ${date}`;

    return {
        player1str: player1Str,
        player2str: player2Str,
        winnerstr: match.winner.name,
        date: formattedDate,
    };
}



export function transformUserToPlayerCard(user: UserV2 & {
    name: { name: string };
    matches1: MatchV2[];
    matches2: MatchV2[];
    wins: MatchV2[]
}){

    const wins = user.wins.length;
    const losses = user.matches1.length + user.matches2.length - wins;
  
    return {
      name: user.name,
      rating: user.rating,
      wins,
      losses,
    };
  }