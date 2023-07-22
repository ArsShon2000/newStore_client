import React from 'react';
import { IAuthPageInput } from '@/types/auth';
import styles from '@/styles/auth/index.module.scss';


export const NameInput = ({ register, errors }: IAuthPageInput) => {
    return (
        <label className={styles.form__label}>
            <input {...register('name',{
                required: 'Введите имя',
                minLength: 2,
                maxLength: 20,
                pattern: {
                    value: /^[а-яА-яa-zA-zёЁ]*$/,
                    message: 'Недопустимое значение!'
                }
            })} className={styles.form__input} type="text" placeholder="Name" />
            {errors.name && (
                <span className={styles.error_alert}>{errors.name?.message}</span>
            )}
            {errors.name && errors.name.type === 'minLength' && (
                <span className={styles.error_alert}>Минимум 2 символа</span>
            )}
            {errors.name && errors.name.type === 'maxLength' && (
                <span className={styles.error_alert}>Максимум 20 смиволов</span>
            )}
        </label>
    );
};