export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";


export const addtodo = (text)=>({
    action: ADD_TODO,
    payload : text
})

export const deletetodo = (id)=>({
    action: DELETE_TODO,
    payload : id
})

export const toggletodo = (id)=>({
    action: TOGGLE_TODO,
    payload : id
})