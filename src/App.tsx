import React, {ComponentType} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, withRouter} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './components/redux/app-reducer';
import store, {AppStateType} from './components/redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';
import {compose} from 'redux';
import {withSuspense} from './components/hoc/withSuspense';
const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import ('./components/Users/UsersContainer'))

type MapDispatchToPropsType = {
    initializeApp: () => void,
}
type MapStateToPropsType = {
    initialized: boolean,
}
export type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={ withSuspense(ProfileContainer) }/>
                    <Route path="/dialogs" render={ withSuspense(DialogsContainer) }/>
                    <Route path="/users" render={ withSuspense(UsersContainer) }/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp
//export default connect(mapStateToProps, {initializeApp})(App);