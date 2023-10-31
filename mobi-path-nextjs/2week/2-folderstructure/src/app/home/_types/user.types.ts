export interface SignInProps {
    email: string;
    password: string
}

export interface SignUpProps extends SignInProps {
    address: string;
    phone: string
}