import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     email: "admin@admin.com",
  //     name: "mostafa",
  //   },
  // });

  await prisma.todo.create({
    data: {
      title: "task one",
      body: "desc task one",
      completed: true,
      user_id: "user_2fsfGbTSYLy3c82MydRgqczLZu2",
    },
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
