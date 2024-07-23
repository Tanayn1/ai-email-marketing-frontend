'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { EditorSession, Product } from "../../../types/types";

export async function saveEmail(json : string, session: EditorSession) {
    try {
        const date = new Date()
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/editor/saveEmail`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                session_id: session.id,
                json_array: [...session.email_saves, {
                    updated_at: `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`,
                    save: json
                }]
            })
        });

        const data = await response.json();
        console.log(data)
        if (response.ok) {
            return data.updatedEditSession
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
    }
}

export async function fetchSession(id : string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/editor/getSession/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json()
        console.log(data)
        if (response.ok) {
            return data.session
        } else {
            return null
        }
    } catch (error) {
        console.log(error)
    }
}

export async function addFileToAssets(formData: FormData, product_id: string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/aws/uploadToS3`,{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData
        })
        const data = await response.json()
        if (response.ok) {
            const url = data.src;
            const response2 = await fetch(`${process.env.BACKEND_URL}/products/addImage`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    product_id: product_id,
                    url: url
                })
            })
            const data2 = await response2.json();
            if (response2.ok){
                const product : Product = data2.product
                return { url, product  }
            }
        } else {
            console.log(data)
            return { error: data.message }
        }
    } catch (error) {
        console.log(error)
    }
}