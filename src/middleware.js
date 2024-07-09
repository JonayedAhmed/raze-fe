import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    // If the token exists, get the user roles
    const roles = token?.role || [];

    const url = new URL(request.url);
    const pathname = url.pathname;

    // Check the pathname and roles
    if (pathname.startsWith('/admin')) {
        if (roles.includes('ADMIN')) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/unauthorized', request.url)); // Redirect to unauthorized page
        }
    } else if (pathname.startsWith('/user')) {
        if (roles.includes('USER')) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/unauthorized', request.url)); // Redirect to unauthorized page
        }
    }

    // Default redirect if not authorized
    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = { matcher: ['/admin/:path*', '/user/:path*'] };
