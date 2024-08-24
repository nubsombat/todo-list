"use server";
import { cookies } from 'next/headers';
export async function  getTokenCookie() {
    const token = cookies().get("token")?.value;
    if (!token) return null;
    return token;
}

export async function setTokenCookie(token: string) {
    const cookieOptions = {
        name: 'token',
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: "strict" as const,
        path: '/',
        maxAge: 60 * 60 * 24, // 7 days
    };
    cookies().set(cookieOptions)
}

export async function removeTokenCookie() {
    cookies().set("token", "", { expires: new Date(0) });
}

