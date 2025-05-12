import prisma from "@/lib/prisma";

export default async function LeaderboardPage() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      elo: true,
    },
  });

  const usersWithStats = await Promise.all(
    users.map(async (user) => {
      const winCount = await prisma.match.count({
        where: {
          winnerId: user.id,
        },
      });

      const lossCount = await prisma.match.count({
        where: {
          AND: [
            { player1Id: user.id },
            { NOT: { winnerId: user.id } },
          ],
        },
      }) + await prisma.match.count({
        where: {
          AND: [
            { player2Id: user.id },
            { NOT: { winnerId: user.id } },
          ],
        },
      });

      return {
        ...user,
        winCount,
        lossCount,
      };
    })
  );

  usersWithStats.sort((a, b) => b.elo - a.elo);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="px-6 py-3 text-left">Ranking</th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">ELO</th>
            <th className="px-6 py-3 text-left">Wins</th>
            <th className="px-6 py-3 text-left">Losses</th>
          </tr>
        </thead>
        <tbody>
          {usersWithStats.map((user, index) => (
            <tr key={user.id} className="border-t border-gray-300 dark:border-gray-600">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.elo}</td>
              <td className="px-6 py-4">{user.winCount}</td>
              <td className="px-6 py-4">{user.lossCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}