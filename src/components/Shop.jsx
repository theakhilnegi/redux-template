import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';


//------without bindActionCreator----------
// const Shop = () => {
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <h2>Deposit/Withdraw money</h2>
//             <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(1000)) }}>-</button>
//             Update balance
//             <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositMoney(1000)) }}>+</button>
//         </div>
//     )


//--------with bindActionCreator--------
const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);

    return (
        <div>
            <h2>Deposit/Withdraw money</h2>
            <button className="btn btn-primary mx-2" onClick={() => { withdrawMoney(1000) }}>-</button>
            Update balance
            <button className="btn btn-primary mx-2" onClick={() => { depositMoney(1000) }}>+</button>
        </div>
    )
}

export default Shop;