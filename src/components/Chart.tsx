import { LineChart } from '@mui/x-charts'
import sensorMockData from '../sensor_mock_data.json'

export const Chart = () => {

  const parsedData = sensorMockData.map(d => ({
  ...d,
  date: new Date(d.timestamp * 1000)
}));

  return (
    <LineChart
    width={900}
        height={400}
        dataset={parsedData}
        xAxis={[
          {
            dataKey: "date",
            scaleType: "time",
            valueFormatter: value => `${value}`
          },
        ]}
        yAxis={[
          { id: "temp", label: "Temperature (°C)", valueFormatter: (value: number) => `${value}` },
          { id: "moist", label: "Soil Moisture (%)", position: "right", valueFormatter: (value: number) => `${value}` },
        ]}
        series={[
          {
            id: "temp-series",
            dataKey: "temperature_c",
            label: "Temperature (°C)",
            yAxisId: "temp",
          },
          {
            id: "moist-series",
            dataKey: "soil_moisture_pct",
            label: "Soil Moisture (%)",
            yAxisId: "moist",
          },
        ]}
    />
  )




}