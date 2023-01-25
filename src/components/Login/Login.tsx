import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/Forms controls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../redux/auth-reducer';
import {AppStateType} from '../redux/redux-store';
import {Redirect} from 'react-router-dom';
import style from './../common/Forms controls/FormsControls.module.css'
import s from './Login.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type MapStateToPropsType = {
    captchaUrl: string | null,
    isAuth: boolean
}
type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({
                                                                                                                 handleSubmit,
                                                                                                                 error,
                                                                                                                 captchaUrl
                                                                                                             }) => {
    return <form onSubmit={handleSubmit}>
        {createField('Login', 'login', [required], Input)}
        {createField('Password', 'password', [required], Input, {type: 'password'})}
        {createField(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

        {captchaUrl && <img src={captchaUrl} alt={'captcha image'}/>}
        {captchaUrl && createField('symbols from image', 'captcha', [required], Input, {})}

        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnPropsType>({form: 'Login'})(LoginForm)

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.loginPage}>
        <span className={s.loginArea}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </span>
        <span className={s.testAccountArea}>
            <p>
                To log in get registered <a href={'https://social-network.samuraijs.com/'} target={'_blank'}>here</a>
            </p>
            <p>
                Or use common test account credentials: <br/>
            </p>
            <p>
                <span className={s.testAcc}>Email:</span> free@samuraijs.com <br/>
                <span className={s.testAcc}>Password:</span> free
            </p>
        </span>
    </div>
}
const mapStateToProps = (state: AppStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)