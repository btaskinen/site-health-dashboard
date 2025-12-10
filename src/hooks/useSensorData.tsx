import { useEffect, useState } from "react";
import type { SensorData } from "../types";

export const useSensorData = (): SensorData => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/sensor_mock_data.json")
      .then((res) => res.json())
      .then((json) => {
        const parsed = json.map((d: any) => ({
          ...d,
          date: new Date(d.timestamp * 1000)
        }));
        setData(parsed);
      });
  }, []);

  return data;
}