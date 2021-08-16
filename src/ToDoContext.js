import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialTodos = [
    {
        id: 1,
        text: '리액트 공부',
        done: true
    }, {
        id: 2,
        text: '청소기 돌리기',
        done: true
    }, {
        id: 3,
        text: '빨래 하기',
        done: false
    }, {
        id: 4,
        text: '청소 또 청소',
        done: false
    }
];

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(
                todo => todo.id === action.id
                    ? {
                        ...todo,
                        done: !todo.done
                    }
                    : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const ToDoStateContext = createContext();
const ToDoDispatchContext = createContext();
const ToDoNextIdContext = createContext();

export function ToDoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <ToDoStateContext.Provider value={state}>
            <ToDoDispatchContext.Provider value={dispatch}>
                <ToDoNextIdContext.Provider value={nextId}>
                    {children}
                </ToDoNextIdContext.Provider>
            </ToDoDispatchContext.Provider>
        </ToDoStateContext.Provider>
    );
}

export function useToDoState() {
    return useContext(ToDoStateContext);
}

export function useToDoDispatch() {
    return useContext(ToDoDispatchContext);
}

export function useToDoNextId() {
    return useContext(ToDoNextIdContext);
}