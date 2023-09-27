import React, { useEffect, useRef, useState } from "react";
import { init } from "klinecharts";
import { adjustFromTo } from "../utils/utils";
import "./style.scss";
import { data } from "../data";

const Chart = (props) => {
  const [loading, setLoading] = useState(false);
  const [symbol, setSymbol] = useState(props.symbol);
  const [period, setPeriod] = useState(props.period);
  const ref = useRef(null);
  let chart = null;
  const apiKey = "fk6cl7Fpa9aXkDZ2pyiDNXorvZMmT5ik";

  const documentResize = () => {
    chart?.resize();
  };

  const getHistoryKLineData = async () => {
    // https://api.polygon.io/v2/aggs/ticker/BABA/range/15/minute/1695341280000/1695791280000?apiKey=k2hPDhLy8gIpP4lMCU0gwo92xNRxE2XI
    // const response = await fetch(
    //   `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/${period}/${period}/${from}/${to}?apiKey=${apiKey}`
    // );

    const response = await fetch(
      `https://api.polygon.io/v2/aggs/ticker/BABA/range/15/minute/1695341280000/1695791280000?apiKey=${apiKey}`
    );
    const result = await response.json();
    return await (result.results || []).map((data) => ({
      timestamp: data.t,
      open: data.o,
      high: data.h,
      low: data.l,
      close: data.c,
      volume: data.v,
      turnover: data.vw,
    }));
  };

  // useEffect(() => {
  //   getHistoryKLineData();
  // }, []);

  useEffect(() => {
    window.addEventListener("resize", documentResize);
    chart = init(ref.current);
    chart.setStyles({
      grid: false,
    });
    return () => {
      window.removeEventListener("resize", documentResize);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      const s = "BABA";
      const p = { multiplier: 15, timespan: "minute" };
      setLoading(true);
      const get = async () => {
        const [from, to] = adjustFromTo(p, new Date().getTime(), 500);

        console.log(from, to);

        // const kLineDataList = await getHistoryKLineData(s, p, from, to);
        chart?.applyNewData(data.results, data.results.length > 0);
        // chart?.updateData(data);

        setLoading(false);
      };
      get();
    }
  }, []);

  useEffect(() => {
    chart?.setStyles("dark");
  }, []);

  useEffect(() => {}, []);
  return <div className="chart__wrapper" ref={ref}></div>;
};

export default Chart;
