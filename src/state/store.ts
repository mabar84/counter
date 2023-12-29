import {counter4Reducer} from './couner4-reducer';
import {combineReducers, createStore} from 'redux'

// const rootReducer = combineReducers(counter4Reducer)

const rootReducer = combineReducers({
    counter4: counter4Reducer
})

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>