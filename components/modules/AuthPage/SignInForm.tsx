import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useStore } from 'effector-react';
import { useForm } from 'react-hook-form';
import { NameInput } from '@/components/elements/AuthPage/NameInput';
import { IInput } from '@/types/auth';
import { PasswordInput } from '@/components/elements/AuthPage/PasswordInput';
import { signInFx } from '@/app/api/auth';
import { showAuthError } from '@/utils/errors';
import { $mode } from '@/context/mode';
import styles from '@/styles/auth/index.module.scss';
import spinnerStyles from '@/styles/spinner/spinner.module.scss';


export const SignInForm = ({ switchForm }: { switchForm: () => void }) => {
    const [spinner, setSpinner] = useState(false)
    const route = useRouter()
    const {
        register,
        formState: { errors },
        handleSubmit,
        resetField
    } = useForm<IInput>()
    const mode = useStore($mode)
    const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

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
            route.push('/dashboard')
        } catch (error) {
            showAuthError(error)
        }
        finally {
            setSpinner(false)
        }
    }

    return (
        <form className={`${styles.form} ${darkModeClass}`} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={`${styles.form_title} ${styles.title} ${darkModeClass}`}>Войти в аккаунт</h2>
            <NameInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <button className={`${styles.form__button} ${styles.button} ${styles.submit} ${darkModeClass}`}>
            {spinner ? <div className={spinnerStyles.spinner} /> : 'SIGN IN'}
                </button>
        </form>
    );
};