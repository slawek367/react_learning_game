import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Test = () => {
    return (
        <div>test component</div>
    );
};

const Routing = () => {
    return (
        <Switch>
            <Route
                exact={true}
                path='/auth'
                component={Test}
            />
            <Route component={Test}/>
        </Switch>
    );
};

export default Routing;
