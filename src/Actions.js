export const loadTodos = () => {
    return(dispatch) => {
        dispatch({type: 'start'})
        fetch("https://jsonplaceholder.typicode.com/comments/?_limit=50")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
    }
}

export const removeTodo = (id) => {
    return(dispatch) => {
        dispatch({type: 'email_deleting', payload: id})
        fetch(`https://jsonplaceholder.typicode.com/comments/?_limit=50${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}
















/*export const loadTodos = () => {
    return function (dispatch) {
        dispatch({type: 'start'})
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
    }
}*/