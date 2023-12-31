import { useDispatch } from "react-redux";
import { populateCart } from "../../store/cart";
import { useState } from "react";
import { toggleLike } from '../../store/produce';


function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(populateCart(produce.id));
  }

  const handleLikeClick = (e) => {
    e.preventDefault();
    dispatch(toggleLike(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={handleLikeClick}
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