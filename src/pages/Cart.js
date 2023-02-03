import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeCountMinus, changeCountPlus } from '../data/store';


function Cart() {

    let state = useSelector((state) => { return state })
    console.log(state);
    
    let dispatch = useDispatch();

    return (
      <div className="cart">
        <p>Cart</p>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
            </tr>
          </thead>
          <tbody>
            {state.cartData.map((obj, i) => (
              <tr key={i}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.count}</td>
                <td>
                <button  onClick={() => {
                    dispatch(changeCountPlus(state.cartData[i].id))           
                  }}>+</button>
                <button  onClick={() => {
                    dispatch(changeCountMinus(state.cartData[i].id));
                  }}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
}

export default Cart;