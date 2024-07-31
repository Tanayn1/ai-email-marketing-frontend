'use server'

import { cookies } from "next/headers";
import { Brand, Colors, Fonts, Product } from "../../../../types/types";

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
        //console.log(data.brand.colors.colors)
        if (response.ok) {
           return data.brand as Brand
        }
    } catch (error) {
        console.log(error)
    }
}

export async function fetchProducts(brandId : string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/products/getProducts/${brandId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })

        const data = await response.json()
        if (response.ok) {
            return data.products
        }
    } catch (error) {
        console.log(error)
    }
}


export async function createProduct(brandId: string, url : string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/products/scrapeProduct`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                url: url,
                brandId: brandId 
            })
        })

        const data = await response.json();
        console.log(data)
        if (response.ok) {
            return data.product
        }
    } catch (error) {
        console.log(error)
    }
}

export async function fetchProductById(prodId : string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/products/getProductById/${prodId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
           
        });
        const data = await response.json()
        if (response.ok) {
            return data.product as Product
        } else {
            return { error: data.message }
        }
    } catch (error) {
        console.log(error)
    }
}

export async function updateProduct(product_id : string, price : string, product_name: string, 
    images: Array<string>, description: string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/products/updateProduct`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                product_id: product_id,
                price: price,
                product_name: product_name,
                images: images,
                description: description
            })
        });
        const data = await response.json()
        console.log(data)
        if (response.ok) {
            return data.updatedProd
        }
    } catch (error) {
        console.log(error)
    }

}

export async function addLogoToLogos(formData: FormData, brandId: string) {
    try {
        const token = cookies().get('Token')?.value;
        const response = await fetch(`${process.env.BACKEND_URL}/aws/uploadToS3`,{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData
        });
        const data = await response.json()
        if (response.ok) {
            const url = data.src
            const response2 = await fetch(`${process.env.BACKEND_URL}/brands/addLogo`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    brandId: brandId,
                    logo: url
                })
            });
            const data2 = await response2.json();
            if (response2.ok) {
                return data.src

            } else {
                return { error: data2.message }
            }
        } else {
            return { error: data.message }
        }
    } catch (error) {
        
    }
}

export async function updateBrands(brand_id: string, brand_name: string, 
    colors: Colors, fonts: Fonts, logos: string[]) {
        try {
            const token = cookies().get('Token')?.value;
            const response = await fetch(`${process.env.BACKEND_URL}/brands/updateBrand`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    brandName: brand_name,
                    logos: logos,
                    fonts: fonts,
                    colors: colors,
                    brandId: brand_id
                })
            });
            const data = await response.json();

            if (response.ok) {
                return data.updateBrand
            }

        } catch (error) {
            console.log(error)
        }
    }