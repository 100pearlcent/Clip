import React, { useReducer, createContext, useContext } from 'react';

const clickedIcon = ''; 

function iconReducer(state, action) {
    switch(action.type) {
        case 'CHANGE':
            return state.current.value = '';
        default:
            throw new Error(`unhandled action type: ${action.type}`);
    }
}

const IconStateContext = createContext();
const IconDispatchContext = createContext();

export function IconProvider({ children }) {
    const [state, dispatch] = useReducer(iconReducer, clickedIcon);
    return (
        <IconStateContext.Provider value={state}>
            <IconDispatchContext.Provider value={dispatch}>
                {children}
            </IconDispatchContext.Provider>
        </IconStateContext.Provider>
    )
}

export function useIconState() {
    return useContext(IconStateContext);
}

export function useIconDispatch() {
    return useContext(IconDispatchContext);
}