
export interface Brand {
    id: string,
    brand_name: string
    brand_url: string | null,
    logo: string | null,
    colors: Colors,
    fonts: Fonts,
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

export interface EditorSession {
    id : string 
    session_name: string
    user_id: string
    brand_id: string
    product_id: string
    email_saves: Array<EmailSave>
    preview_image_src: string 
    created_at: string
}

export interface EmailSave {
    save: string,
    updated_at: string
}

export interface Fonts {
    primaryFont: string, 
    secondaryFont: string
}

export interface Colors {
    colors: {
        primaryColor: string,
        secondaryColors: Array<any>
    },
    backgroundColors: {        
        primaryColor: string,
        secondaryColors: Array<any>
    }
}

export interface ESPKey {
    label: string,
    created_at: string,
    id: string
}