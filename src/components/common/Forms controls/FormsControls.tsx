import React from 'react';
import styles from './FormsControls.module.css'

type FieldCreatorPropsType = {
    input: string
    meta: any
    typeField: string
    props: any
}


export const FieldCreator: React.FC<FieldCreatorPropsType> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                { props.typeField === 'input' && <input {...input} {...props}/> }
                { props.typeField === 'textarea' && <textarea {...input} {...props}/> }
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}