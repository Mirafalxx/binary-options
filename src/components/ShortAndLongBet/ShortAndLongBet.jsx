import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
// import { longBet, shortBet } from "../../store/slices/chartSlice";
import "./style.scss";
import { ChartContext } from "../../utils/ChartContext";
// import { type } from "@testing-library/user-event/dist/type";
import { formatTime } from "../../utils/utils";

// const clr = directionBet === "long" ? "rgba(77, 180, 150,0.5)" : "rgba(246, 42, 87,0.5)";
const ShortAndLongBet = () => {
  // const dispatch = useDispatch();
  const { time, value } = useSelector((state) => state.chart);

  let { chartSettings } = useContext(ChartContext);

  const createAnnotation = (type) => {
    const dataList = chartSettings?.getDataList() ?? [];

    const data = dataList[dataList.length - 1];

    chartSettings?.createOverlay({
      name: `${type}BetAnnotation`,
      extendData: `${type} -  ${value}  $`,
      points: [{ timestamp: data.timestamp, value: data.high }],
    });

    let secondsElapsed = 0;

    const interval = setInterval(function () {
      secondsElapsed++;
      chartSettings?.overrideOverlay({
        extendData: `${formatTime(time - secondsElapsed)}: ${type} -  ${value}  $`,
      });

      if (secondsElapsed === time) {
        clearInterval(interval); // Остановить выполнение после 5 секунд
        chartSettings?.removeOverlay();
      }
    }, 1000);
  };

  // const createRect = () => {
  //   chartSettings?.createOverlay({
  //     groupId: "drawing_tools",
  //     name: "rect",
  //     visible: true,
  //     lock: false,
  //     mode: "normal",
  //     color: "green",
  //     onDrawEnd: function ({ overlay }) {
  //       console.log(overlay.id);
  //       // Listen to the completion of drawing and overwrite the attribute
  //       // chart.overrideOverlay({
  //       //   id: overlay.id,
  //       //   lock: true,
  //       //   extendData: 'Update override overlay',
  //       //   styles: { color: 'rgba(10, 230, 100, .3)' }
  //       // })
  //     },
  //   });
  // };

  return (
    <div className="short-long__bet">
      <button className="up-button" onClick={() => createAnnotation("long")}>
        Up
      </button>
      <button className="down-button" onClick={() => createAnnotation("short")}>
        Down
      </button>
    </div>
  );
};

export default ShortAndLongBet;
