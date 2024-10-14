import { DefaultSession, DefaultUser } from "next-auth";
import { Role } from "./role";

interface IUser extends DefaultUser {
  /**
   * Role of the user
   */
  role?: Role;
}

declare module "next-auth" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface User extends IUser {}

  interface Session extends DefaultSession {
    user?: User;
  }
}
