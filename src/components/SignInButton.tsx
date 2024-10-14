"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ServerProtectedPage() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        // const img = session.user.image;
        // src="https://github.com/shadcn.png"

        <Button
          className="bg-stone-700/50 dark:bg-stone-200 inline-flex items-center gap-6 px-[34px] py-2 text-sm text-stone-400 dark:text-stone-500"
          onClick={() => signOut()}
        >
          <Avatar>
            <AvatarImage src={session?.user?.image ?? ""} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      ) : (
        <Button
          className="bg-stone-700/50 dark:bg-stone-200 inline-flex items-center gap-6 px-[34px] py-2 text-sm text-stone-400 dark:text-stone-500"
          onClick={() => signIn()}
        >
          Sign in
        </Button>
      )}
    </>
  );
}
