'use server'
import { cookies } from "next/headers";
import { EditorSession } from "../../../../types/types";

export async function generateEmail(brand_id : string, product_id: string, 
    emailDescription: string, designStyle: string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/ai/generateEmail`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                prompt: emailDescription,
                brand_id: brand_id,
                product_id: product_id,
                designStyle: designStyle
            })
        })
        const data  = await response.json()
        console.log(data)
        if (response.ok) {
            //const session : EditorSession = data.newSession
            return data.newSession as EditorSession
        }
    } catch (error) {
        console.log(error)
    }
}