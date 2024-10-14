import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { Role } from "@/types/role";

const google_client_id = process.env.GOOGLE_CLIENT_ID ?? "";
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET ?? "";

console.log(
  "Google client id=${google_client_id} secret=${google_client_secret}"
);

console.log(
  "Github client id=${github_client_id} secret=${github_client_secret}"
);

const github_client_id = process.env.GITHUB_CLIENT_ID ?? "";
const github_client_secret = process.env.GITHUB_CLIENT_SECRET ?? "";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: google_client_id,
      clientSecret: google_client_secret,
      profile: (profile) => {
        console.log("Google profile", profile);

        let userRole = Role.user;

        if (profile?.email === "veminovici@gmail.com") {
          userRole = Role.admin;
        }

        const user = {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: userRole,
        };

        console.log("Google User", user);

        return user;
      },
    }),
    GithubProvider({
      clientId: github_client_id,
      clientSecret: github_client_secret,
      profile: (profile) => {
        console.log("Github profile", profile);

        let userRole = Role.user;

        if (profile?.email === "veminovici@hotmail.com") {
          userRole = Role.admin;
        }

        const user = {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          role: userRole,
        };

        console.log("Github User", user);

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn callback", {
        user,
        account,
        profile,
        email,
        credentials,
      });
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   console.log("redirect callback", { url, baseUrl });
    //   return baseUrl;
    // },
    async session({ session, user, token }) {
      console.log("session callback", { session, user, token });

      if (session.user) {
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({
      token,
      user,
      account,
      profile,
      isNewUser,
    }: {
      token: any;
      user?: any;
      account?: any;
      profile?: any;
      isNewUser?: boolean;
    }) {
      console.log("jwt callback", { token, user, account, profile, isNewUser });

      if (user) {
        token.role = user.role;
      }

      return token;
    },
  },
};
