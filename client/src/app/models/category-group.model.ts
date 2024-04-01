import { Category } from "./category.model";

export interface CategoryGroup{
    id?: number;
    title: string;
    categories: Category[];
}