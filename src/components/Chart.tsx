import './Chart.css'
import { LineChart, legendClasses, type MarkElementProps } from '@mui/x-charts'
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
    ...(showTemperature ? [{ id: "temp", label: "Temperature (°C)", labelStyle: { fontSize: 16, fontWeight: 600 }, valueFormatter: (value: number) => `${value}`, tickLabelStyle: { fontSize: 16 } }] : []),
    ...(showMoisture ? [{ id: "moist", label: "Soil Moisture (%)", labelStyle: { fontSize: 16, fontWeight: 600  }, position: "right" as const, valueFormatter: (value: number) => `${value}`, tickLabelStyle: { fontSize: 16 } }] : []),
  ]

  const isoFormatter = new Intl.DateTimeFormat('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

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
        height={500}
        dataset={data}
        xAxis={[
          {
            dataKey: "date",
            scaleType: "time",
            valueFormatter: (v) => isoFormatter.format(v),
            label: "Measurement Timestamp",
            labelStyle: { fontSize: 16, fontWeight: 600 },
            height: 160,
            tickLabelStyle: {
              angle: -60,
              fontSize: 16,
            }
          },
        ]}
        yAxis={yAsix}
        series={series}
        colors={['#1b4332', '#74c69d']}
        slots={{
          mark: CustomMark,
        }}
        sx={{
          [`.${legendClasses.label}`]: {
          fontSize: 18,
        },
  }}
      />
    </div>
  )
}

const CustomMark = (props: MarkElementProps) => {
  const { x, y, color } = props;

  return (
    <g>
      <circle cx={x} cy={y} r={3} fill={color || 'currentColor'} />
    </g>
  );
}