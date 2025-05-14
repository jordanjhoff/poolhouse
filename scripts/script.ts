import prisma from '@/lib/prisma'

const v1Matches = [
  {
    player1Name: 'jordy',
    player2Name: 'gar',
    winnerName: 'gar',
  },
  {
    player1Name: 'gar',
    player2Name: 'Noam',
    winnerName: 'gar',
  },
  {
    player1Name: 'gar',
    player2Name: 'Tommy',
    winnerName: 'Tommy',
  },
  {
    player1Name: 'gubb',
    player2Name: 'Tommy',
    winnerName: 'gubb',
  },
  {
    player1Name: 'gubb',
    player2Name: 'Andrew',
    winnerName: 'Andrew',
  },
  {
    player1Name: 'jordy',
    player2Name: 'Andrew',
    winnerName: 'Andrew',
  },
  {
    player1Name: 'Ferullo',
    player2Name: 'LXS',
    winnerName: 'Ferullo',
  },
  {
    player1Name: 'Ferullo',
    player2Name: 'gubb',
    winnerName: 'gubb',
  },
  {
    player1Name: 'jordy',
    player2Name: 'gubb',
    winnerName: 'gubb',
  },
  {
    player1Name: 'Tommy',
    player2Name: 'gubb',
    winnerName: 'Tommy',
  },
  {
    player1Name: 'alex',
    player2Name: 'Tommy',
    winnerName: 'Tommy',
  },
];

async function migrateMatches() {
  for (const match of v1Matches) {
    try {
      const { player1Name, player2Name, winnerName } = match;

      // Fetch player IDs based on names
      const players = await prisma.userV2.findMany({
        where: {
          name: {
            in: [player1Name, player2Name, winnerName],
          },
        },
        select: {
          id: true,
          name: true,
        },
      });

      const player1 = players.find((player) => player.name === player1Name);
      const player2 = players.find((player) => player.name === player2Name);
      const winner = players.find((player) => player.name === winnerName);

      if (!player1 || !player2 || !winner) {
        console.error('One or more players not found:', { player1Name, player2Name, winnerName });
        continue;
      }

      // Send data to the match/create API
      const response = await fetch('http://localhost:3000/api/match/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_JWT_TOKEN`, // Make sure to use a valid token
        },
        body: JSON.stringify({
          player1Id: player1.id, 
          player2Id: player2.id,
          winnerId: winner.id,
        }),
      });
      console.log(response)

      const data = await response.json();

      if (response.ok) {
        console.log(`Successfully migrated match between ${player1Name} and ${player2Name}:`, data);
      } else {
        console.error('Error creating match:', data);
      }
    } catch (error) {
      console.error(`Error migrating match between ${match.player1Name} and ${match.player2Name}:`, error);
    }
  }
}

migrateMatches()
  .then(() => console.log('Migration completed!'))
  .catch((err) => console.error('Migration failed:', err));
