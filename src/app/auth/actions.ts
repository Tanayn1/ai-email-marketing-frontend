'use server'
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";



export async function signUp(name : string ,email : string, password : string) {
    try {
        const response  = await fetch(`${process.env.BACKEND_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: name, email: email, password: password})
        });
        const parsedRes = await response.json();
        console.log(parsedRes)
        if (!response.ok) return {error: parsedRes.message};
        const setCookieHeader = response.headers.get('Set-Cookie');
        if (setCookieHeader) {
            const token = setCookieHeader.split(';')[0].split('=')[1];
            cookies().set({
                name: 'Token',
                value: token,
                secure: true,
                httpOnly: true,
            })
            return { redirect: '/dashboard' }
        }
    } catch (error) {
        console.log(error)
    }
}

export async function logIn(email : string, password : string) {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/auth/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email, password: password})
        });
        const parsedRes = await response.json();
        console.log(parsedRes)
        if (!response.ok) return {error: parsedRes.message};
        const setCookieHeader = response.headers.get('Set-Cookie');
        if (setCookieHeader) {
            const token = setCookieHeader.split(';')[0].split('=')[1];
            cookies().set({
                name: 'Token',
                value: token,
                secure: true,
                httpOnly: true,
            })
        }

        return {redirect: '/dashboard'}

    } catch (error) {
        console.log(error)
    }
}
