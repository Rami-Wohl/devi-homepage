import { hash } from "argon2";
import { db } from "~/server/db";

async function main() {
  await db.user.upsert({
    where: {
      email: "ramiwohl@hotmail.com",
    },
    create: {
      email: "ramiwohl@hotmail.com",
      name: "Rami",
      password: await hash("Abcdefghij123"),
    },
    update: {},
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
