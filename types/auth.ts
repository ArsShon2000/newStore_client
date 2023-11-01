import { FieldErrors, UseFormRegister } from "react-hook-form"

export interface IInput {
    name: string
    email: string
    password: string
}

export interface IAuthPageInput {
    register: UseFormRegister<IInput>
    errors: FieldErrors<IInput>
}

export interface ISignUpFx {
    url: string
    username: string
    password: string
    email: string
}

export interface ISignInFx {
    url: string
    username: string
    password: string
}

export interface IUser {
    username: string
    userId: string | number
    email: string
}