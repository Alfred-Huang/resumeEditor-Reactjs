import {createStore, combineReducers, applyMiddleware} from 'redux'
import {moduleReducer, experienceInfoReducer} from "./reduers/userSection_reducer"
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const allReducer = combineReducers({moduleReducer: moduleReducer, experienceInfoReducer: experienceInfoReducer})


export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
