import {createStore, combineReducers, applyMiddleware} from 'redux'
import {moduleReducer, experienceInfoReducer, resumeReducer} from "./reduers/userSection_reducer"
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {composeWithDevTools} from 'redux-devtools-extension'
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};

const allReducer = combineReducers({moduleReducer: moduleReducer, experienceInfoReducer: experienceInfoReducer, resumeReducer: resumeReducer})
const myPersistReducer = persistReducer(persistConfig, allReducer)
const store = createStore(myPersistReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)
export default store
