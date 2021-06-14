import ChartBar from './ChartBar.js';
import './Chart.css';

const Chart = (props) => {
  const valueArray = props.datapoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...valueArray)

  return (
    <div className="chart">
      {props.datapoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
