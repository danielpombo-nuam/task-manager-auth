export interface ITask {
    id: number;
    title: string;
    description: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    user_id: number;
}