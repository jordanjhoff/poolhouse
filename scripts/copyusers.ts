import prisma from '@/lib/prisma'; // Ensure you're importing your Prisma client

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
  await prisma.userV2.deleteMany({})
  await prisma.matchV2.deleteMany({})
  // Create new users in the UserV2 model
  for (const user of users) {
    try {
      // Create a new UserV2 record

      const userV2 = await prisma.userV2.create({
        data: {
          id: user.id,  // Keeping the same ID
          name: user.name,
          password: user.password,
          rating: 1500, // Default value for new users
          rd: 350,      // Default value for new users
          volatility: 0.06, // Default value for new users
        },
      });

      console.log(`Migrated user ${user.name} with ID ${user.id}`);
      console.log(userV2.id)
    } catch (err) {
      console.error(`Error migrating user ${user.name}:`, err);
    }
  }
}

migrateUsers()