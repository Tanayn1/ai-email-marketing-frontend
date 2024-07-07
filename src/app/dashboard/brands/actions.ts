'use server'

import { cookies } from "next/headers";

export async function fetchBrands() {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/brands/getBrands`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json()
        if (response.ok) {
            return data.brands
        } else {
            return null
        }
    } catch (error) {
        console.log(error)
    }
}

export async function ScrapeAndCreateBrand(name : string, url : string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/brands/scrapeBrand`, { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                url: url,
                brandName: name
            })
        }
        );
        const data = await response.json();
        console.log(data)
        if (response.ok) {
            return { redirect: `/dashboard/brands/brand?id=${data.brand.id}` }
        }

    } catch (error) {
        console.log(error)
    }
}

export async function fetchBrandById(brandId: string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/brands/${brandId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json();
        console.log(data)
        if (response.ok) {
           return data.brand 
        }
    } catch (error) {
        console.log(error)
    }
}