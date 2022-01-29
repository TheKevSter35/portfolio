//thunk API CALL
export const getItems = () => async dispatch =>{
	// const payload = await fetch(`https://kevincuriapi.herokuapp.com/portfolio`)
	const payload = await fetch(`https://my-json-server.typicode.com/TheKevSter35/portfolio-db/portfolio`)
	const response = await payload.json()
	dispatch(updateItems(response))
}



export const setProject = (id) => async dispatch =>{
	// const payload = await fetch(`https://kevincuriapi.herokuapp.com/portfolio/${id}`)
	const payload = await fetch(`https://my-json-server.typicode.com/TheKevSter35/portfolio-db/portfolio/${id}`)
	const response = await payload.json()
	if(payload.status === 404){
		dispatch(errorProject(true))
	} else{
	dispatch(errorProject(false))
	dispatch(updateProject(response))	
	}
}

// action
export const updateItems = value => ({
	type: 'UPDATE_ITEMS',
	value
})

export const updateProject = value => ({
	type: 'UPDATE_PROJECT',
	value
})

export const errorProject = value => ({
	type: 'ERROR_PROJECT',
	value
})

