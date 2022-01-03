


export interface Customer {
    id: number;
    first_name: string;
    last_name: string;
    by_company?: any;
    phone: string;
    email: string;
    gender: string;
    designation: string;
    designation_id: number;
    img: string;
    email_verified_at?: any;
    user_type: number;
    created_at: Date;
    updated_at: Date;
}

export interface RootData {
    id: number;
    customer_id: number;
    manager_id?: any;
    manager_type?: any;
    company_worker_id?: any;
    active: number;
    name: string;
    description: string;
    project_offer?: any;
    project_drawing?: any;
    street: string;
    postal_code: string;
    city: string;
    start_date: string;
    end_date: string;
    status: number;
    created_at: Date;
    updated_at: Date;
    employee: any[];
    customer: Customer;
    tasks: any[];
    pinnedproject: any[];
    manager?: any;
}
export interface SubmitData {
    id: string;
    customer_id: string;
    name: string;
    description: string;
    street: string;
    postal_code: string;
    city: string;
    start_date: string;
    end_date: string;
}
