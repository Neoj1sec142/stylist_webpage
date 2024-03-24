import { ImageGroup } from "./image-group.model";


export interface ImageItem{
    id: number;
    img: File;
    img_description: string;
    img_group: ImageGroup;
    date_created: Date;
}

export interface ImageItemDto{
    img: File;
    img_description: string;
    img_group: number;
}