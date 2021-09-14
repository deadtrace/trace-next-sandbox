import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { getDbConnection } from "../../../helpers/db";
import { verifyPassword } from "../../../helpers/crypt";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await getDbConnection();

        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({
          username: credentials.username,
        });

        if (!user) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Could not log you in!");
        }

        client.close();

        return { username: user.username };
      },
    }),
  ],
});
