import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rewrite any /<path>.md request to /api/md/<path> so we keep the
// clean ".md" URL convention while serving from a single API handler.
//
// Examples:
//   /about.md            -> /api/md/about
//   /platform/ccms.md    -> /api/md/platform/ccms
//   /index.md, /.md      -> /api/md/index (root)

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.endsWith(".md")) {
    const stripped = pathname.slice(0, -3); // remove ".md"
    const segments = stripped.split("/").filter(Boolean);
    const target = segments.length === 0 ? "/api/md/index" : `/api/md/${segments.join("/")}`;

    const url = req.nextUrl.clone();
    url.pathname = target;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Match every path that ends in .md
  matcher: ["/((?!_next/|api/).*\\.md)"],
};
