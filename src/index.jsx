/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    // eslint-disable-next-line no-undef
    document.getElementById('root')
);
