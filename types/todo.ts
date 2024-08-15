export interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

export interface TodoCreated {
    title: string;
    description: string;
}