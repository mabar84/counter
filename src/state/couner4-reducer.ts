const initialState: StateType = {
    minValue: 0,
    maxValue: 5,
    value: 0,
    error: false,
    errorMinMax: false,
    hideSet: true,
}

export const counter4Reducer = (state: StateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-MIN-VALUE4': {
            return {...state, minValue: action.value}
        }
        case 'SET-MAX-VALUE4': {
            return {...state, maxValue: action.value}
        }
        case 'SET-VALUE4': {
            return {...state, value: action.value}
        }
        case 'SET-ERROR4': {
            return {...state, error: action.value}
        }
        case 'SET-ERROR-MIN-MAX4': {
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
    | ReturnType<typeof setMinValue4AC>
    | ReturnType<typeof setMaxValue4AC>
    | ReturnType<typeof setValue4AC>
    | ReturnType<typeof setError4AC>
    | ReturnType<typeof setErrorMinMax4AC>
    | ReturnType<typeof setHideSetAC>

export const setMinValue4AC = (value: number) => ({type: 'SET-MIN-VALUE4' as const, value})
export const setMaxValue4AC = (value: number) => ({type: 'SET-MAX-VALUE4' as const, value})
export const setValue4AC = (value: number) => ({type: 'SET-VALUE4' as const, value})
export const setError4AC = (value: boolean) => ({type: 'SET-ERROR4' as const, value})
export const setErrorMinMax4AC = (value: boolean) => ({type: 'SET-ERROR-MIN-MAX4' as const, value})
export const setHideSetAC = (value: boolean) => ({type: 'SET-HIDE-SET' as const, value})