
//thunk API CALL
export const getItems = () => async dispatch => {
	const payload = await fetch('https://jsonplaceholder.typicode.com/photos')
	const response = await payload.json()

	dispatch(updateItems(response))

}
// action
export const updateItems = value => ({
	type: 'UPDATE_ITEMS',
	value
})