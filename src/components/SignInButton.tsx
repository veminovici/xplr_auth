"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, User } from "lucide-react";

export default function ServerProtectedPage() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9">
              <AvatarImage src={session?.user?.image ?? ""} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuItem
              onClick={(e) => {
                console.log("Profile clicked");
                e.stopPropagation();
              }}
            >
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(e) => {
                console.log("Logout clicked");
                signOut({ callbackUrl: "/" });
                e.stopPropagation();
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
