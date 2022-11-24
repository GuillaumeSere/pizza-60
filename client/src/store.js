import {combineReducers }from 'redux';
import { applyMiddleware} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllPizzasReducer } from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cartReducer';


const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cartReducer: {
        cartItems: cartItems
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store