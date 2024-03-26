

export interface User{
    id?: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    is_staff: boolean;
    is_superuser?: boolean;
}


export interface RegisterInput{
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}
