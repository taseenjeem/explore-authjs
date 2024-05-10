import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import mongodbClientPromise from "./lib/db";
import { userModel } from "./models/userDataModel";
import mongoConnect from "./lib/mongoConnect";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  adapter: MongoDBAdapter(mongodbClientPromise, {
    databaseName: process.env.DB_NAME,
  }),
  session: { strategy: "jwt" },
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (credentials === null) return null;

        await mongoConnect();

        try {
          const user = await userModel.findOne({ email: credentials?.email });

          if (user) {
            const isPasswordMatched = user?.password === credentials?.password;

            if (isPasswordMatched) {
              return user;
            } else {
              throw new Error("Email or password is not correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          console.error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
