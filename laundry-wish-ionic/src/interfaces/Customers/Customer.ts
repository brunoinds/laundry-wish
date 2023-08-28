interface ICustomer{
    id: number,
    created_at: string,
    updated_at: string,
    business_id: number,
    name: string,
    phone: string,
    email: string,
    address: string,
    address_details: string,
    allow_notifications: boolean
}



export type { ICustomer };