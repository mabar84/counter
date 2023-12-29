const initialState: StateType = {
    minValue: 0,
    maxValue: 5,
    value: 0,
    error: false,
    errorMinMax: false,
    hideSet: true,
    showText: false
}

export const counter5Reducer = (state: StateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-MIN-VALUE5': {
            return {...state, minValue: action.value}
        }
        case 'SET-MAX-VALUE5': {
            return {...state, maxValue: action.value}
        }
        case 'SET-VALUE5': {
            return {...state, value: action.value}
        }
        case 'SET-ERROR5': {
            return {...state, error: action.value}
        }
        case 'SET-ERROR-MIN-MAX5': {
            return {...state, errorMinMax: action.value}
        }
        case 'SET-SHOW-TEXT': {
            return {...state, showText: action.value}
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
    showText: boolean
}

type ActionsType =
    | ReturnType<typeof setMinValue5AC>
    | ReturnType<typeof setMaxValue5AC>
    | ReturnType<typeof setValue5AC>
    | ReturnType<typeof setError5AC>
    | ReturnType<typeof setErrorMinMax5AC>
    | ReturnType<typeof setShowTextAC>

export const setMinValue5AC = (value: number) => ({type: 'SET-MIN-VALUE5' as const, value})
export const setMaxValue5AC = (value: number) => ({type: 'SET-MAX-VALUE5' as const, value})
export const setValue5AC = (value: number) => ({type: 'SET-VALUE5' as const, value})
export const setError5AC = (value: boolean) => ({type: 'SET-ERROR5' as const, value})
export const setErrorMinMax5AC = (value: boolean) => ({type: 'SET-ERROR-MIN-MAX5' as const, value})
export const setHideSetAC = (value: boolean) => ({type: 'SET-HIDE-SET' as const, value})
export const setShowTextAC = (value: boolean) => ({type: 'SET-SHOW-TEXT' as const, value})