import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
      name: string;
      email: string;
    };
  }
}

const cookieOptions = {
  cookieName: "challenge_session",
  password: "dasfsafxcvdcgdsghryrepgodsjgsdjglkdsjgoiejgoewji",
  httpOnly: false,
  secure: false,
  sameSite: "none"
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
