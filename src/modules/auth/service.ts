import http from "@/shared/services/http";

export const login = (data: any) => http.post(`auth/login`, data);
export const register = (data: any) => http.post(`auth/register`, data);