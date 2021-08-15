import {createStore,applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares=[reduxThunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(reduxLogger)
}

const store=createStore(rootReducer,applyMiddleware(...middlewares));

export default store;