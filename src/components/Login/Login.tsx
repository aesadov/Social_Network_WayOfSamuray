import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FieldCreator} from '../common/Forms controls/FormsControls';
import {required} from '../../utils/validators/validators';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={FieldCreator} validate={[required]} name={'login'} placeholder={'Login'} typeField='input'/>
        </div>
        <div>
            <Field component={FieldCreator} validate={[required]} name={'password'} placeholder={'Password'} typeField='input'/>
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
      console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login