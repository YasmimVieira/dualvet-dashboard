export interface User {
    email: string;
    username: string;
    password: string;
    token: string;
}

export interface UserLogin {
    username: string;
    password: string;
    token: string;
}