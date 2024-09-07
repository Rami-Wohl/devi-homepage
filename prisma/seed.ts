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

  await db.user.upsert({
    where: {
      email: "devi.hisgen@gmail.com",
    },
    create: {
      email: "devi.hisgen@gmail.com",
      name: "Devi",
      password: await hash("h0tsefl0ts"),
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
