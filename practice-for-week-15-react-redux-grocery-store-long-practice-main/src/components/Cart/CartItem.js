import { useState, useEffect } from 'react';
import cartReducer, { addCount, removeItem, minusCount } from '../../store/cart';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeItem(item.id))
  }
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addCount(item.id))
  }
  const handleMinus = (e) => {
    e.preventDefault();
    dispatch(minusCount(item.id))
  }
  

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={handleAdd}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={handleMinus}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleClick}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;