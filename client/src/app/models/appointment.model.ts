import { Time } from "@angular/common";

export interface Appointment{
    id: number;
    req_date: Date;
    req_time: Time;
    set_date?: Date;
    set_time?: Time;
    client_name: string;
    email?: string;
    phone?: string;
    has_been_viewed: boolean;
    date_created: Date;
    date_modified: Date;
}

export interface AppointmentDto{
    req_date: Date;
    req_time: Time;
    client_name: string;
    email?: string;
    phone?: string;
}