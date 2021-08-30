
//thunk API CALL
export async function getItems(dispatch) {
	const payload = await fetch('https://jsonplaceholder.typicode.com/photos')
	const response = await payload.json()

	dispatch(updateItems(response))
}
// action
export const updateItems = value => ({
	type: 'UPDATE_ITEMS',
	value
})