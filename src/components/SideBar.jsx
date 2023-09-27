import React from "react";
import Investment from "./Inputs/Investment";
import Time from "./Inputs/Time";
import ShortAndLongBet from "./ShortAndLongBet/ShortAndLongBet";
import "./style.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Time />
      <Investment />
      <ShortAndLongBet />
    </div>
  );
};

export default SideBar;
