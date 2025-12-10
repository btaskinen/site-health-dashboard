import './SiteHealthDashboard.css'
import { Chart } from './components/Chart';
import { Header } from './components/Header'
import { MetricsCard } from './components/MetricsCard'
import { useSensorData } from './hooks/useSensorData';

export const SiteHealthDashboard = () => {

  const { data, loading, error} = useSensorData();

  console.log(data);

  if (loading) return (<div>Loading data...</div>)
  if (error) return (<div>Something went wrong.</div>)

  const latestDataPoint = data.reduce((latest, entry) => entry.timestamp > latest.timestamp ? entry : latest);

  const moistureCurrentValue = latestDataPoint.soil_moisture_pct.toFixed(1);
  const moistureMinValue = data.reduce((latest, entry) => entry.soil_moisture_pct < latest.soil_moisture_pct ? entry : latest).soil_moisture_pct.toFixed(1);
  const moistureMaxValue = data.reduce((latest, entry) => entry.soil_moisture_pct > latest.soil_moisture_pct ? entry : latest).soil_moisture_pct.toFixed(1);

  const tempCurrentValue = latestDataPoint.temperature_c.toFixed(1);
  const tempMinValue = data.reduce((latest, entry) => entry.temperature_c < latest.temperature_c ? entry : latest).temperature_c.toFixed(1);
  const tempMaxValue = data.reduce((latest, entry) => entry.temperature_c > latest.temperature_c ? entry : latest).temperature_c.toFixed(1);;

  return (
    <div className='SiteHealthDashboard'>
      <Header />
      <div className='SiteHealthDashboard__mainContent'>
        <div className='SiteHealthDashboard__metricsContainer'>
          <MetricsCard
            title='Moisture'
            currentValue={moistureCurrentValue}
            minValue={moistureMinValue}
            maxValue={moistureMaxValue}
            unit='%'
          />
          <MetricsCard
            title='Temperature'
            currentValue={tempCurrentValue}
            minValue={tempMinValue}
            maxValue={tempMaxValue}
            unit='°C'
          />
        </div>
        <Chart data={data} />
      </div>
    </div>
  )
}
