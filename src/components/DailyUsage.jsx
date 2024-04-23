import { LineChart } from '@mui/x-charts/LineChart';
import energyUsage from '../../Data.json'

let days = []
let usage = []
function getLast7Days(data) {
  let last7Days = [];
  const startIndex = Math.max(data.length - 7, 0);
  for (let i = startIndex; i < data.length; i++) {
    last7Days.push(data[i]);
  }
 
  last7Days.forEach(entry => {
    const [day, month, year] = entry.date.split('-').map(Number);
    const date = new Date(2000 + year, month - 1, day);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
    days.push(formattedDate)
    usage.push(entry.usage)
  });
}
getLast7Days(energyUsage);

const DailyUsage = () => {
  return (
    <div className='daily-usage'>
      <h5 className="section-title">Daily Usage</h5>
      <LineChart
      xAxis={[{ scaleType: 'point', data: days }]}
      sx= {{
        "& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line": {
          stroke: "#ffffff",
        },
        "& .css-1k2u9zb-MuiChartsAxis-root  .MuiChartsAxis-tick": {
          stroke: "#ffffff",
        },
        "& .css-1k2u9zb-MuiChartsAxis-root  .MuiChartsAxis-tickLabel": {
          fill: "#ffffff",
        },
        "& .css-1u0lry5-MuiChartsLegend-root": {
          display: "none",
        },
        "& .css-1u2hdaw-MuiChartsAxisHighlight-root": {
          stroke: "#ffffff"
        }
      }}

      series={[
        {
          data: usage,
          label: "kwh"
        },
      ]}
      colors={['#45CE83']}
      height={300}
    />
    </div>
  )
}

export default DailyUsage
