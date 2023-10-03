import React from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrementTime, incrementTime } from "../../store/slices/chartSlice";
import { formatTime } from "../../utils/utils";

const Time = () => {
  const timeValue = useSelector((state) => state.chart.time);
  const dispatch = useDispatch();

  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60)
  //     .toString()
  //     .padStart(2, "0");
  //   const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
  //   return `${minutes}:${remainingSeconds}`;
  // };
  return (
    <div className="place-bet investment">
      <button onClick={() => dispatch(decrementTime())} disabled={timeValue <= 0}>
        -
      </button>
      <div className="counter">{formatTime(timeValue)}</div>
      <button onClick={() => dispatch(incrementTime())}>+</button>
      <label className="element-description time">time</label>
    </div>
  );
};

export default Time;
