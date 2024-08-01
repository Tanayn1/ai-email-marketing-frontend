'use server'

import { cookies } from "next/headers";

export async function fetchAssets(session_id : string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/editor/assets/${session_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (response.ok) {
            return data.assets
        }
    } catch (error) {
        console.log(error)
    }
}


export async function addFileToAssets(formData: FormData, session_id: string) {
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
        console.log(data)
        if (response.ok) {
            const url = data.src;
            const response2 = await fetch(`${process.env.BACKEND_URL}/editor/addToAssets`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    sessionId: session_id,
                    image: url
                })
            })
            const data2 = await response2.json();
            console.log(data2)
            if (response2.ok){
                return { url }
            }
        } else {
            console.log(data)
            return { error: data.message }
        }
    } catch (error) {
        console.log(error)
    }
}