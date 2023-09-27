import { useDispatch } from "react-redux";
import { populateCart } from "../../store/cart";
import { useState } from "react";


function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch()
  const [id, setId] = useState('')
  const [count, setCount] = useState('')

  // cartItem = {
  //   id: produce.id,
  //   count: count
  // }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(populateCart(cartItem))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handleClick}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;