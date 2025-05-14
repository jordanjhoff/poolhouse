import { FC } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "./ui/card";
import { Badge } from "lucide-react";

type PlayerLineProp = {
  name: string;
  rating: number;
  winCount: number;
  lossCount: number;
};

interface LeaderboardProps {
  players: PlayerLineProp[];
}

export const Leaderboard: FC<LeaderboardProps> = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => b.rating - a.rating);

  return (
    <Card className="p-2 shadow-lg">
      <CardContent className="p-2">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-200">
            <TableHead className="text-left font-bold">Ranking</TableHead>
              <TableHead className="text-left font-bold">Player</TableHead>
              <TableHead className="text-left font-bold">Rating</TableHead>
              <TableHead className="text-left font-bold">Wins</TableHead>
              <TableHead className="text-left font-bold">Losses</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedPlayers.map((player, i) => (
              <TableRow key={player.name + i} className="border-b border-gray-200">
                <TableCell className="py-2 px-4">{i + 1}</TableCell>
                <TableCell className="py-2 px-4">{player.name}</TableCell>
                <TableCell className="py-2 px-4">{player.rating}</TableCell>
                <TableCell className="py-2 px-4">
  <span className="mt-1 px-3 py-1 bg-green-500">
    {player.winCount}
  </span>
</TableCell>
<TableCell className="py-2 px-4">
  <span className="mt-1 px-3 py-1 bg-red-500">
    {player.lossCount}
  </span>
</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};