import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FormControl} from '../../common/Forms controls/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import s from './AddMessageForm.module.css'

export type FormDataType = {
    newMessageBody: string
}
const maxlength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <Field component={FormControl}
                       validate={[required, maxlength50]}
                       name="newMessageBody"
                       placeholder="Enter your message"
                       typeField='textarea'/>
            </div>

            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)