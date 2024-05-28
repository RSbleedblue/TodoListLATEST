import { createContext, useContext, useReducer } from "react";

const TODOContext = createContext();

const initialState = {
    todo : [{
        id:1,
        task:"making great application",
        date:"12th December 2024"
    }]
}
const TodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todo: [...state.todo, action.payload],
            };
        case "DELETE_TODO":
            return {
                ...state,
                todo: state.todo.filter(each => each.id !== action.payload),
            };
        case "EDIT_TODO":
            return {
                ...state,
                todo: state.todo.map(todo =>
                    todo.id === action.payload.id ? { ...todo, task: action.payload.task } : todo
                ),
            };
        default:
            return state;
    }
};
export const TODOProvider = ({children}) => {
    const [state, dispatch] = useReducer(TodoReducer,initialState);
    return (
        <TODOContext.Provider value={{state,dispatch}}>
            {children}
        </TODOContext.Provider>
    )
}
export default TODOContext;