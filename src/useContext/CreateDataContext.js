import React, { useReducer } from 'react';

//Actions
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//Reducer
export const countReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};

export const Context = React.createContext();

export const Provider = ({ children }) => {

    const defaultValue = {
        count: 0
    }
    const [state, dispatch] = useReducer(countReducer, defaultValue);

    // const boundActions = {};
    // for (let key in actions) {
    //   boundActions[key] = actions[key](dispatch);
    // }

    return (
        <Context.Provider value={{ state, dispatch }}  >
            {children}
        </Context.Provider>
    );
};
