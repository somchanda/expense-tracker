import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
function Balance() {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
  return (
    <div className="balance">
        <h4>
            your balance<br />
            ${total}
        </h4>
    </div>
  )
}

export default Balance
