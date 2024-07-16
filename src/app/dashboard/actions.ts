'use server'
import { cookies } from "next/headers";
import { Product } from "../../../types/types";

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

export async function fetchProductsByBrandId(brand_id : string) {
    try {
        const token = cookies().get('Token')?.value;
        if (!token) return { result: false };
        const response = await fetch(`${process.env.BACKEND_URL}/products/getProducts/${brand_id}`, {
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

export async function createEditSession(product : Product) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/editor/createManualSession`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                brand_id: product.brand_id,
                product_id: product.id,
                product_name: product.product_name
            })
        });
        const data = await response.json() 
        if (response.ok) {  
            return data.editSession.id
        }
    } catch (error) {
        console.log(error)
    }
}

export async function fetchEditSessions() {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/editor/getUserSessions`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (response.ok) {
            return data.sessions
        }
    } catch (error) {
        console.log(error)
    }
}