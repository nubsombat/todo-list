export type LoginCredentials = {
    username: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    password: string;
    created_at: Date;
    updated_at: Date;

}

export interface RegisterData {
    username: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
}
