import './SiteHealthDashboard.css'
import { Header } from './components/Header'
import { MetricsCard } from './components/MetricsCard'

export const SiteHealthDashboard = () => {
  const moistureCurrentValue = 8;
    const moistureMinValue = 4;
  const moistureMaxValue = 15;

  const tempCurrentValue = 20;
  const tempMinValue = 15;
  const tempMaxValue = 25;

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
      </div>
    </div>
  )
}
