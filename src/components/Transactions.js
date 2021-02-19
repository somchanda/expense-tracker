import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Transaction from './Transaction';

function Transactions() {
    const {transactions} = useContext(GlobalContext);
    return (
        <>
            <h4 className="title">
                History
                <hr />
            </h4>
            <ul className="history-card">
                {transactions.map(transaction => (
                    <Transaction transaction={transaction} />
                ))}
            </ul>
        </>
    )
}

export default Transactions;
