import { prismaClient } from "@/src/client";

async function main() {
  const usersWithPosts = await prismaClient.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(usersWithPosts, { depth: null });
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prismaClient.$disconnect();
    process.exit(1);
  });
