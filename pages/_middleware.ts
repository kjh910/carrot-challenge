import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (
    !req.url.includes("/api") &&
    !req.url.includes("/create-account") &&
    !req.url.includes("/log-in")
  ) {
    if (!req.cookies.challenge_session) {
      return NextResponse.redirect(new URL("/create-account", req.url));
    }
  }
}
