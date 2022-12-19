import React from 'react';
import styles from './FormsControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';


type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

export const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error}, children}) => {

    const hasError = touched && error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
export const createField = (placeholder: string | undefined,
                            name: string,
                            validators: any,
                            component: React.FC<WrappedFieldProps>,
                            props = {},
                            text = '') => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)