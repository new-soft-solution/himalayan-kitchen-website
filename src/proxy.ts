import { NextResponse, type NextRequest } from "next/server";

/** Honor an explicit language preference when returning to the homepage. */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host");
  if (host) url.host = host;
  if (url.pathname === "/" && request.cookies.get("hk-language")?.value === "nl") {
    url.pathname = "/nl";
    const response = NextResponse.redirect(url, 307);
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("Vary", "Cookie");
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
