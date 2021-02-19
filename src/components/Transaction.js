import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Transaction({ transaction }) {
    const className = transaction.amount > 0 ? 'plus' : 'minus';
    const sign = transaction.amount < 0 ? '-$' : '+$';
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <li className={className}>
            {transaction.text}
            <span>
                {sign}{Math.abs(transaction.amount)}
            </span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>X</button>
        </li>
    )
}

export default Transaction
