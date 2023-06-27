import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const { email, password } = credentials;

        if (email === "admin@gmail.com" && password === "123") {
          return Promise.resolve({ id: 1, name: "Admin" });
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       token.id = user.id;
  //       token.name = user.name;
  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     session.user = token;
  //     return session;
  //   },
  // },
  // session: {
  //   jwt: true,
  // },
  pages: {
    signIn: "/analytics",
  },
};

export default (req, res) => NextAuth(req, res, options);
