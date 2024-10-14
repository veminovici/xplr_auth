"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <Button
      className="w-full"
      onClick={() => {
        signIn("google", { callbackUrl });
      }}
    >
      Continue with Google
    </Button>
  );
}
