export type Task = {
    id?: number;
    title: string;
    description: string;
    status: string;
    user_id?: number;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
};