import {createStore, combineReducers} from 'redux'
import {moduleReducer, experienceReducer} from "./reduers/userSection_reducer";


const allReducer = combineReducers({moduleReducer: moduleReducer, experienceReducer: experienceReducer})

export default createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
