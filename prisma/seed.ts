import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const student1 = await prisma.students.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'admin',
      username: 'adminsiswa',
      password: 'asdqwe123',
    },
  });

  const teacher1 = await prisma.teachers.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'admin',
      username: 'adminguru',
      password: 'asdqwe123',
    },
  });

  console.log({ student1, teacher1 });
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
