import Link from "next/link";
import SignInButton from "./SignInButton";

export default async function Header() {
  return (
    <header className="flex h-24 flex-col justify-center bg-gray-400">
      <nav className="container">
        <ul className="flex items-center justify-between gap-8 font-medium tracking-wider text-gray-700">
          <li className="text-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm">
            <Link href="/protected/server">Protected (server)</Link>
          </li>
          <li className="text-sm">
            <Link href="/protected/client">Protected (client)</Link>
          </li>
          <li className="text-sm">
            <SignInButton></SignInButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
