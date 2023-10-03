import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/slices/chartSlice";
import "./style.scss";

const Investment = () => {
  const count = useSelector((state) => state.chart.value);
  const dispatch = useDispatch();

  return (
    <div className="place-bet investment">
      <button onClick={() => dispatch(decrement("short"))} disabled={count <= 0}>
        -
      </button>
      <div className="counter">{count} $</div>
      <button onClick={() => dispatch(increment("long"))}>+</button>
      <label className="element-description investment">investment</label>
    </div>
  );
};

export default Investment;
