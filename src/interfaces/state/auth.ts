import { User } from "@/interfaces/entity/user";

export interface AuthState {
    token: string;
    user?: User;
}