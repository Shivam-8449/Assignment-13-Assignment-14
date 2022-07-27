enum Role {
    SUPERADMIN,
    ADMIN, 
    SUBSCRIBER 
}

class User {
    id: number;
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    phone: string;
    role_id: number;
    address: string;
    customer_id: number;

    constructor(id: number, firstName: string, middleName: string, lastName: string, email: string, phone: string, role_id: number, address: string, customer_id: number) {
        this.id = id;
        this.firstname = firstName;
        this.middlename = middleName;
        this.lastname = lastName;
        this.email = email;
        this.phone = phone;
        this.role_id = role_id;
        this.address = address;
        this.customer_id = customer_id;
    }
}

export { User, Role };