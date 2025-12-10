import { useEffect, useState } from "react";
import type { SensorData } from "../types";

export const useSensorData = () => {
  const [data, setData] = useState<SensorData>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/sensor_mock_data.json");
        const json = await res.json();

        const parsed: SensorData = json.map((d: any) => ({
          ...d,
          date: new Date(d.timestamp * 1000),
        }));

        setData(parsed);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
}