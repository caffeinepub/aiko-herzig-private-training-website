import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface backendInterface {
    deleteInquiry(id: bigint): Promise<void>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiriesByEmail(email: string): Promise<Array<Inquiry>>;
    getInquiry(id: bigint): Promise<Inquiry>;
    submitInquiry(name: string, email: string, message: string): Promise<void>;
}
