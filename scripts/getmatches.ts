import prisma from '@/lib/prisma';

async function getAllMatches() {
  try {
    const matches = await prisma.match.findMany({
      include: {
        player1: { select: { id: true, name: true} },
        player2: { select: { id: true, name: true} },
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    for (const match of matches) {
      console.log(`${match.player1.id} vs ${match.player2.id} → Winner: ${match.winnerId}`) ;
    }

    console.log(`\nTotal matches: ${matches.length}`);
  } catch (error) {
    console.error('Error fetching matches:', error);
  } finally {
    await prisma.$disconnect();
  }
}

getAllMatches();
