import React from "react";
import { useDispatch } from "react-redux";
import { longBet, shortBet } from "../../store/slices/counterSlice";
import "./style.scss";

const ShortAndLongBet = () => {
  const dispatch = useDispatch();
  return (
    <div className="short-long__bet">
      <button className="up-button" onClick={() => dispatch(longBet("long"))}>
        Up
      </button>
      <button className="down-button" onClick={() => dispatch(shortBet("short"))}>
        Down
      </button>
    </div>
  );
};

export default ShortAndLongBet;
