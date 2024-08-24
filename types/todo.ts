export interface Todo {
    id: string;
    title: string;
    description: string;
    created_by: CreatedBy;
    completed: boolean;
    created_at: string;
    updated_at: string;
}
export interface CreatedBy {
    id: string;
    username: string;
}
