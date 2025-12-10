import './Chart.css'
import { LineChart } from '@mui/x-charts'
import { useState } from 'react';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { type SensorData } from '../types';

type Props = {
  data: SensorData
}

export const Chart = ({data}: Props) => {
  const [showMoisture, setShowMoisture] = useState(true);
  const [showTemperature, setShowTemperature] = useState(true);

  const handleShowMoisture = () => {
    showMoisture ? setShowMoisture(false) : setShowMoisture(true)
  }

  const handleShowTemperature = () => {
    showTemperature ? setShowTemperature(false) : setShowTemperature(true)
  }

  const series = [
    ...(showTemperature ? [{
    id: "temp-series",
    dataKey: "temperature_c",
    label: "Temperature (°C)",
    yAxisId: "temp",
    }] : []),
    ...(showMoisture ? [{
      id: "moist-series",
      dataKey: "soil_moisture_pct",
      label: "Soil Moisture (%)",
      yAxisId: "moist",
    }] : []),
  ]

  const yAsix = [
    ...(showTemperature ? [{ id: "temp", label: "Temperature (°C)", valueFormatter: (value: number) => `${value}` }] : []),
    ...(showMoisture ? [{ id: "moist", label: "Soil Moisture (%)", position: "right" as const, valueFormatter: (value: number) => `${value}` }] : []),
  ]

  return (
    <div className='Chart'>
      <FormGroup className='Chart__toggleSwitch'>
        <FormControlLabel
          control={<Switch checked={showMoisture} onChange={handleShowMoisture}/>}
          label="Moisture"
        />
        <FormControlLabel
          control={<Switch checked={showTemperature} onChange={handleShowTemperature}/>}
          label="Temperature"
        />
      </FormGroup>
      <LineChart
        dataset={data}
        xAxis={[
          {
            dataKey: "date",
            scaleType: "time",
            valueFormatter: value => `${value}`
          },
        ]}
        yAxis={yAsix}
        series={series}
      />
    </div>
  )
}