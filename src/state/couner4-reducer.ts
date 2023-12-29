const initialState: StateType = {
    minValue: 0,
    maxValue: 5,
    value: 0,
    error: false,
    errorMinMax: false,
    hideSet: true
}

export const counter4Reducer = (state: StateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-MIN-VALUE': {
            return {...state, minValue: action.value}
        }
        case 'SET-MAX-VALUE': {
            return {...state, maxValue: action.value}
        }
        case 'SET-VALUE': {
            return {...state, value: action.value}
        }
        case 'SET-ERROR': {
            return {...state, error: action.value}
        }
        case 'SET-ERROR-MIN-MAX': {
            return {...state, errorMinMax: action.value}
        }
        case 'SET-HIDE-SET': {
            return {...state, hideSet: action.value}
        }
        default:
            return state
    }
}

export type StateType = {
    minValue: number
    maxValue: number
    value: number
    error: boolean
    errorMinMax: boolean
    hideSet: boolean
}

type ActionsType =
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setErrorMinMaxAC>
    | ReturnType<typeof setHideSetAC>

export const setMinValueAC = (value: number) => ({type: 'SET-MIN-VALUE' as const, value})
export const setMaxValueAC = (value: number) => ({type: 'SET-MAX-VALUE' as const, value})
export const setValueAC = (value: number) => ({type: 'SET-VALUE' as const, value})
export const setErrorAC = (value: boolean) => ({type: 'SET-ERROR' as const, value})
export const setErrorMinMaxAC = (value: boolean) => ({type: 'SET-ERROR-MIN-MAX' as const, value})
export const setHideSetAC = (value: boolean) => ({type: 'SET-HIDE-SET' as const, value})