import {createStore, combineReducers} from 'redux'
import {moduleReducer, experienceInfoReducer} from "./reduers/userSection_reducer";


const allReducer = combineReducers({moduleReducer: moduleReducer, experienceInfoReducer: experienceInfoReducer})

export default createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
