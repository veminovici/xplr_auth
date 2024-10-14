import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

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
    }),
    GithubProvider({
      clientId: github_client_id,
      clientSecret: github_client_secret,
    }),
  ],
  pagses: {
    signIn: "/signin",
  },
};
