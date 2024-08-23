import { NextResponse } from "next/server";
// import { decrypt } from "@/app/lib/session";
// import { cookies } from "next/headers";

// 1. Specify protected and public routes
const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/"];

export default async function middleware(req) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);

    // 3. Decrypt the session from the cookie
    // const cookie = cookies().get('session')?.value
    // const session = await decrypt(cookie)

    // 4. Redirect to /login if the user is not authenticated
    if (isProtectedRoute) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    // 6. Redirect to /dashboard if the user is authenticated
    // if (
    //     isPublicRoute &&
    //     session?.userId &&
    //     !req.nextUrl.pathname.startsWith("/dashboard")
    // ) {
    //     return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    // }

    return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
