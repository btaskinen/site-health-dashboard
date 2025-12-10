import './MetricsCard.css';

type Props = {
  title: string;
  currentValue: string;
  minValue: string;
  maxValue: string;
  unit: string;
};

export const MetricsCard = ({ title, currentValue, minValue, maxValue, unit }: Props) => {
  return (
    <div className="MetricsCard">
      <h3>{title}</h3>
      <h1 className="MetricsCard__currentValue">{currentValue}{unit}</h1>
      <div className='MetricsCard__valuesContainer'>
        <div className='MetricsCard__value'>
          <h5>{minValue}{unit}</h5>
          <div>min</div>
        </div>
        <div className='MetricsCard__value'>
          <h5>{maxValue}{unit}</h5>
          <div>max</div>
        </div>
      </div>
    </div>
  );
};