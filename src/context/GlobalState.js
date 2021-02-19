import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialState = {
    transactions: [
        {id: 1, text: 'Cash', amount: 500}, 
        {id: 2, text: 'Book', amount: -20},
        {id: 3, text: 'Phone', amount: -200},
        {id: 4, text: 'Salary', amount: 300},
        {id: 5, text: 'KTV', amount: -55}
    ]
}

//Create context
export const GlobalContext = createContext(initialState);

// provider component
export const GloabalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}
