import { NextResponse } from "next/server";

export function middleware(request){
    const accessToken = request.cookies.get("accessToken")?.value;
    console.log('Middleware in action...')

    if (!accessToken){
        console.log("No accessToken, redirecting to login...")
        return NextResponse.redirect(
            new URL('/login', request.url)
        );
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/homepage']
};