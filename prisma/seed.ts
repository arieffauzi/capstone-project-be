import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const student1 = await prisma.users.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'admin',
      username: 'admin',
      password: 'asdqwe123',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
