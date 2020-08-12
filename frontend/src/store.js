import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers';

const initialState = {};

//REDUCER - STATE
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//STORE - RUDUCER / STATE PROVIDER
const store = createStore(
    reducer,
    initialState,
    composeEnchancer(applyMiddleware(thunk))
)

export default store;

