const initialState = {
    items: [],
    project: {},
}

const global = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ITEMS':
            return {
                ...state,
                items: action.value
            }
            case 'UPDATE_PROJECT':
            return {
                ...state,
                project: action.value
            }
        default:
            return state
    }
}
export default global