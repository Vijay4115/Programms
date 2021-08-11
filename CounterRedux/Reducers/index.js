import { createStore,combineReducers } from 'redux';
import reducer from './updown';
const rootReducer=combineReducers({
    reducer,
})

const store=createStore(rootReducer)

export default store;