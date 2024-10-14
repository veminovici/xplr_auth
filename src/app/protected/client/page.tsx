"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { User } from "next-auth";
import { Role } from "@/types/role";

export default function ClientProtectedPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => redirect("/signin?callbackUrl=/protected/client"),
  });

  const user: User | undefined = session?.user;
  const role: Role | undefined = user?.role;

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-2xl font-bold">
          This is a <span className="text-emerald-500">client-side</span>{" "}
          protected page!
        </h1>
        <h2 className="mt-4 font-medium">
          You are logged in as:
          <p className="mt-4 font-bold">{session?.user?.name}</p>
        </h2>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <p>Image: {user?.image}</p>
        <p>Role: {role}</p>
      </div>
    </section>
  );
}
