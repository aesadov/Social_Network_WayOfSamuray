import React from 'react';
import {Preloader} from '../common/Preloader/Preloader';

export function withSuspense(Component: any) {

    return (props: any) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}