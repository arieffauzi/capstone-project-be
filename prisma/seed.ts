import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const siswa1 = await prisma.siswa.upsert({
    where: { id: 1 },
    update: {},
    create: {
      username: 'adminsiswa',
      password: 'asdqwe123',
    },
  });

  const guru1 = await prisma.guru.upsert({
    where: { id: 1 },
    update: {},
    create: {
      username: 'adminguru',
      password: 'asdqwe123',
    },
  });

  console.log({ siswa1, guru1 });
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
