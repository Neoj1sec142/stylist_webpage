
export interface TrackingIncrementor{
    id?: number;
    count: number;
    max_field_len?: number;
    times_incremented?: number;
    title: string;
    description?: string;
    date_created?: Date 
    date_modified?: Date;
}