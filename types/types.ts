
export interface Brand {
    id: string,
    brand_name: string
    brand_url: string | null,
    logo: string | null,
    colors: any,
    fonts: any,
    created_at: string
}

export interface Product {
    id: string,
    brand_id: string,
    price: string,
    product_url: string,
    product_name: string,
    images: Array<string>,
    description: string
    created_at: string
}