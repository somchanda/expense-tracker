import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context/GlobalState';

function AddNewTransaction() {
    const {addTransaction} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    function submit(e){
        e.preventDefault();
        const newTransaction = {
            id:Math.floor(Math.random() * 10000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setAmount(0);
        setText('');
        e.target.firstChild.focus();
    }
    return (
        <>
            <h4 className="title">
                Add new transaction
                <hr />
            </h4>
            <h5>
                Text
            </h5>
            <form onSubmit={submit}>
                <input type="text" required placeholder="Enter text..." value={text} onChange={e => setText(e.target.value)} />
                <h4>
                    Amount (negative - expense, positive - income)
                </h4>
                <input type="number" placeholder="Enter amount..." value={amount} onChange={e => setAmount(e.target.value)} />
                <input type="submit" value="Add transaction" /> 
            </form>
        </>
    )
}

export default AddNewTransaction;
