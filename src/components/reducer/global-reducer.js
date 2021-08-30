const initialState = []

export const global = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ITEMS':
            return {
                ...state,
                items: action.value
            }
        default:
            return state
    }
}
