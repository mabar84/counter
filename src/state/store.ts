import {counter4Reducer} from './couner4-reducer';
import {combineReducers, createStore} from 'redux'
import {counter5Reducer} from './couner5-reducer';

// const rootReducer = combineReducers(counter4Reducer)

const rootReducer = combineReducers({
    counter4: counter4Reducer,
    counter5: counter5Reducer
})

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>