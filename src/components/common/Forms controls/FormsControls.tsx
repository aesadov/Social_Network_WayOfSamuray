import React from 'react';
import styles from './FormsControls.module.css'
import {Field, WrappedFieldInputProps, WrappedFieldMetaProps} from 'redux-form';

type FieldCreatorPropsType = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    typeField: 'input' | 'textarea'
    props: any
}


export const FieldCreator: React.FC<FieldCreatorPropsType> = ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                { props.typeField === 'input' && <input {...input} {...props}/> }
                { props.typeField === 'textarea' && <textarea {...input} {...props}/> }
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const createField = (placeholder: string | null, name: string, validators: any, component: any, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}

               {...props}
               typeField='input'
        /> {text}
    </div>
)