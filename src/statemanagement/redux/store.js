import { createStore, combineReducers } from 'redux';
import { numberOfClicksReducer } from './reducers'

const rootRuducer = combineReducers({
    numberOfClicks: numberOfClicksReducer,
})
export const store = createStore(rootRuducer) 