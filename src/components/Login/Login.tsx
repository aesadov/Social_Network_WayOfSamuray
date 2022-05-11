import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {FieldCreator} from '../common/Forms controls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../redux/auth-reducer';
import {AppStateType} from '../redux/redux-store';
import {Redirect} from 'react-router-dom';
import style from './../common/Forms controls/FormsControls.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={FieldCreator} validate={[required]} name={'login'} placeholder={'Login'}
                   typeField="input"/>
        </div>
        <div>
            <Field component={FieldCreator} validate={[required]} name={'password'} placeholder={'Password'}
                   typeField="input" type={'password'}/>
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
        </div>
        {props.error && <div className={style.formSummaryError}>{props.error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)