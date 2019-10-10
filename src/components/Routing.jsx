import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './clickerGame/clickerGame';

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
            <Route component={Game}/>
        </Switch>
    );
};

export default Routing;
