import React from 'react'

function AddNewTransaction() {
    return (
        <>
            <h4 className="title">
                Add new transaction
                <hr />
            </h4>
            <h5>
                Text
            </h5>
            <form>
                <input type="text" placeholder="Enter text..." />
                <h4>
                    Amount (negative - expense, positive - income)
                </h4>
                <input type="text" placeholder="Enter amount..." />
                <input type="submit" value="Add transaction" /> 
            </form>
        </>
    )
}

export default AddNewTransaction;
