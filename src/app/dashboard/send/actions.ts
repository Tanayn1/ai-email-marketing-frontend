'use server'

import { cookies } from "next/headers";
import { ESPKey } from "../../../../types/types";

export async function fetchKeys() {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/esp-api-keys/api_keys`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        const data = await response.json();

        if (response.ok) {
            return data.keys as Array<ESPKey>
        } else return {error: 'Failed To Fetch Keys'}
    } catch (error) {
        console.log(error)
        return { error }
    }
}

export async function createEspApiKey(label : string, api_key : string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/esp-api-keys/create_api_key`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                key: api_key,
                label: label,
            })
        });
        const data = await response.json();
        console.log(data)
        if (response.ok) {
            return data.newKey as ESPKey
        }
    } catch (error) {
        console.log(error)
        
    }
}