import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
function IncomeExpense() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => acc += item, 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
  return (
    <div className="income-expense">
      <div>
          <h5>
              Income
              <div className="income">
                  ${income}
              </div>
          </h5>
      </div>
      <div className="line">

      </div>
      <div>
          <h5>
              Expense
              <div className="expense">
                  ${expense}
              </div>
          </h5>
      </div>
    </div>
  )
}

export default IncomeExpense
