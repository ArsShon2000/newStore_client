import React from 'react';
import { NameInput } from '@/components/elements/AuthPage/NameInput';
import { IInput } from '@/types/auth';
import { useForm } from 'react-hook-form';
import { EmailInput } from '@/components/elements/AuthPage/EmailInpust';
import { PasswordInput } from '@/components/elements/AuthPage/PasswordInput';
import { signUpFx } from '@/app/api/auth';
import { toast } from 'react-toastify';
import styles from '@/styles/auth/index.module.scss';


export const SignUpForm = ({ switchForm }: { switchForm: () => void }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        resetField
    } = useForm<IInput>()

    const onSubmit = async (data: IInput) => {
        try {
            const userData = await signUpFx({
                url: '/users/signup',
                username: data.name,
                password: data.password,
                email: data.email
            })

            console.log(userData);

            resetField('name')
            resetField('email')
            resetField('password')
            switchForm()
        } catch (error) {
            toast.error((error as Error).message)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={`${styles.form_title} ${styles.title}`}>Создать аккаунт</h2>
            <NameInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <button className={`${styles.form__button} ${styles.button} ${styles.submit}`}>SIGN UP</button>
        </form>
    );
};