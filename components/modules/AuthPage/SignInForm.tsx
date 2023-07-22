import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NameInput } from '@/components/elements/AuthPage/NameInput';
import { toast } from 'react-toastify';
import { IInput } from '@/types/auth';
import { PasswordInput } from '@/components/elements/AuthPage/PasswordInput';
import { signInFx } from '@/app/api/auth';
import styles from '@/styles/auth/index.module.scss';


export const SignInForm = ({ switchForm }: { switchForm: () => void }) => {
    const [spinner, setSpinner] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
        resetField
    } = useForm<IInput>()

    const onSubmit = async (data: IInput) => {
        try {
            setSpinner(true)
            await signInFx({
                url: '/users/login',
                username: data.name,
                password: data.password,
            })

            resetField('name')
            resetField('password')
        } catch (error) {
            toast.error((error as Error).message)
        }
        finally {
            setSpinner(false)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={`${styles.form_title} ${styles.title}`}>Войти в аккаунт</h2>
            <NameInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <button className={`${styles.form__button} ${styles.button} ${styles.submit}`}>SIGN IN</button>
        </form>
    );
};