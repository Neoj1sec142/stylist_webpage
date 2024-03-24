import { ImageItem } from "./image-item.model";


export interface ImageGroup{
    id: number; 
    client_name: string;
    client_email: string;
    client_social: string;
    style_description: string;
    imgs: ImageItem[]
    date_created: Date;
    date_modified: Date;
}

export interface ImageGroupDto{
    client_name: string;
    client_email: string;
    client_social: string;
    style_description: string;
}