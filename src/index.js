import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router-dom'
import App from './App'
// import ReactGA from 'react-ga';
import {createBrowserHistory} from 'history';
import withTracker from './user/component/withTracker';
import './index.css';

import store from './store/store';
// import Root from './root';
import * as serviceWorker from './serviceWorker';

const Root = ({ store }) => (
<Provider store={store}>
    <Router history={createBrowserHistory()}>
        <Route path="/" component={withTracker(App)} />
    </Router>
</Provider>
)

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();