import prisma from '@/lib/prisma';
import fetch from 'node-fetch';

async function migrateUsers() {


  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      password: true,
      elo: true,
      k: true,
    },
  });

  console.log(users)
  await prisma.matchV2.deleteMany({})
  await prisma.userV2.deleteMany({})
  for (const user of users) {
    try {

      const userV2 = await prisma.userV2.create({
        data: {
          id: user.id, 
          name: user.name,
          password: user.password,
          rating: 1500,
          rd: 350,
          volatility: 0.06, 
        },
      });

      console.log(`Migrated user ${user.name} with ID ${user.id}`);
      console.log(userV2.id)
    } catch (err) {
      console.error(`Error migrating user ${user.name}:`, err);
    }
  }
}



async function getAllMatches() {
  await prisma.matchV2.deleteMany({})
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
      console.log(`${match.player1.id} vs ${match.player2.id} - Winner: ${match.winnerId}`);
      console.log(`${match.player1.name} vs ${match.player2.name} - Winner: ${match.winnerId}`) ;
      const response = await fetch("http://localhost:3000/api/match/createdev", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          player1Id: match.player1.id, 
          player2Id: match.player2.id,
          winnerId: match.winnerId, 
        }),
      });

      const data = await response.json();
      console.log('Response:', data);
    }

    console.log(`\nTotal matches: ${matches.length}`);
  } catch (error) {
    console.error('Error fetching matches:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  await prisma.matchV2.deleteMany({})
  await prisma.userV2.deleteMany({})
  await migrateUsers();
  await getAllMatches();
}

main().catch(console.error);
