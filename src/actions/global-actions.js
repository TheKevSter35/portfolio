

//thunk API CALL
export const getItems = () => async dispatch =>{
	const payload = await fetch(`${process.env.REACT_APP_API_KEY}`)
	const response = await payload.json()
	dispatch(updateItems(response))
}
// action
export const updateItems = value => ({
	type: 'UPDATE_ITEMS',
	value
})


export const setProject = (id) => async dispatch =>{
	const payload = await fetch(`${process.env.REACT_APP_API_KEY}/${id}`)
	const response = await payload.json()
	dispatch(updateProject(response))
	console.log(response)
}
// action
export const updateProject = value => ({
	type: 'UPDATE_PROJECT',
	value
})
