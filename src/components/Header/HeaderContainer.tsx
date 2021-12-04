import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {setAuthUserData} from '../redux/auth-reducer';
import {usersAPI} from '../../api/api';

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        usersAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setAuthUserData(id, email, login,)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);