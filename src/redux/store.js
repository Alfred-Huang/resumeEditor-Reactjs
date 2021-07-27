import {createStore, combineReducers, applyMiddleware} from 'redux'
import {moduleReducer, experienceInfoReducer, resumeReducer} from "./reduers/userSection_reducer"
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const allReducer = combineReducers({moduleReducer: moduleReducer, experienceInfoReducer: experienceInfoReducer, resumeReducer: resumeReducer})


export default createStore(allReducer, applyMiddleware(thunk))
