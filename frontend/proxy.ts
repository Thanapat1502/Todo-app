import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { UserRoleEnum } from "./common/enum/user-role.enum";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;

  if (!token) {
    console.warn("No token found");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET ||
        "your-super-secret-and-long-key-at-least-32-chars"
    );
    // console.log(
    //   "---------------------------Proxy Middleware----------------------------"
    // );
    // console.log("Token decoded:", decoded);
    if (
      typeof decoded === "object" &&
      decoded !== null &&
      "role" in decoded &&
      decoded.role !== UserRoleEnum.ADMIN
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    // else {
    //   console.error("Role not correct, Check decoded:", decoded);
    // }
  } catch (err) {
    console.error("Proxy error:", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
