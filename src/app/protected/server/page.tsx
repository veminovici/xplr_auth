import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authoptions";
import { redirect } from "next/navigation";

export default async function ServerProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/protected/server");
    // return {
    //   redirect: {
    //     destination: "/signin?callbackUrl=/protected/server",
    //     permanent: false,
    //   },
    // };
  }

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-2xl font-bold">
          This is a <span className="text-emerald-500">server-side</span>{" "}
          protected page!
        </h1>
        <h2 className="mt-4 font-medium">You are logged in as:</h2>
        <p className="mt-4 font-bold">{session?.user?.name}</p>
        <p>Name: {session?.user?.name}</p>
        <p>Email: {session?.user?.email}</p>
        <p>Image: {session?.user?.image}</p>
      </div>
    </section>
  );
}
