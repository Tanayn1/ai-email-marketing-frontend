'use server'
import { cookies } from "next/headers";

export async function checkUser() {
    try {
        const token = cookies().get('Token')?.value;
        if (!token) return false;
        const response = await fetch(`${process.env.BACKEND_URL}/users/getUser`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json()
        if (response.ok) {
            return true
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}