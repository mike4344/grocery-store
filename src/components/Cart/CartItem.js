import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {deleteItem} from '../../store/cart'

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch()
  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">
        {item.name}
      </div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={e => setCount((prev)=> prev + 1)}/>
        <button
          className="cart-item-button"
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={e =>{dispatch(deleteItem(item.id))}}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CartItem;
