const initialState = {
    items: []
}

const global = (state = initialState, action) => {
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
export default global