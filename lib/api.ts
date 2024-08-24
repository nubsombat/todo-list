import { getTokenCookie } from "@/utils/tokenStorge";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_DOMAIN;

export class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = 'ApiError';
    }
}

interface ApiClientOptions extends RequestInit {
    useProxy?: boolean;
}

export async function apiClient<T>(endpoint: string, options: ApiClientOptions = {}): Promise<T> {
    const url = options.useProxy
        ? `/api${endpoint}`
        : `${API_BASE_URL}${endpoint}`;

    const token = await getTokenCookie();

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...options.headers as Record<string, string>,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new ApiError(response.status, response.statusText);
    }

    return response.json();

}