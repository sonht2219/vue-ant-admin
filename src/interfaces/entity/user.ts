import {CommonStatus} from "@/enums/status";

export interface User {
    id: number;
    email: string;
    phone_number: string;
    name: string;
    birthday: number;
    address: string;
    status: CommonStatus;
    created_at: string;
    updated_at: string;
}