import {createStore, combineReducers, applyMiddleware} from 'redux'
import {moduleReducer, experienceInfoReducer} from "./reduers/userSection_reducer"
import thunk from 'redux-thunk';


const allReducer = combineReducers({moduleReducer: moduleReducer, experienceInfoReducer: experienceInfoReducer})
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

export default createStore(allReducer, applyMiddleware(thunk))
