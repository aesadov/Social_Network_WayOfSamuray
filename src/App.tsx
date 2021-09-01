import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import {DispatchType, StoreType} from './components/redux/redux-store';

type AppPropsType = {
    store: StoreType,
    dispatch: DispatchType
}


const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        state={state}
                        dispatch={props.store.dispatch.bind(props.store)}
                        />}/>
                    <Route path="/dialogs" render={() => <Dialogs
                        state={state}
                        dispatch={props.dispatch}/>}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>
        </BrowserRouter>)

}

export default App;