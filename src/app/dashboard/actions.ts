'use server'
import { cookies } from "next/headers";

export async function checkUser() {
    try {
        const token = cookies().get('Token')?.value;
        if (!token) return { result: false };
        const response = await fetch(`${process.env.BACKEND_URL}/users/getUser`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json()
        const user = data.user
        if (response.ok) {
            return { result: true, user  }
        } else {
            return { result: false }
        }

    } catch (error) {
        console.log(error)
        return { result: false }
    }
}

export async function fetchProductsByBrandId() {
    try {
        const token = cookies().get('Token')?.value;
        if (!token) return { result: false };
        const response = await fetch(`${process.env.BACKEND_URL}/users/getUser`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json()

        if (response.ok) {
            return data.products
        }
    } catch (error) {
        console.log
    }
}