import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import energyUsage from '../../Data.json'

function calculateMonthlyUsage(data) {
  const monthlyUsage = [];
  
  data.forEach(entry => {
      let month = entry.month.slice(0,3);
      let usage = entry.usage;
      let integerUsage = Math.floor(usage);
     const existingMonthIndex = monthlyUsage.findIndex(item => item.month === month);

     if (existingMonthIndex >= 0) {
         monthlyUsage[existingMonthIndex].usage += integerUsage;
         
     } else {
         monthlyUsage.push({ month: month, usage: integerUsage });
     }
  });
 
  return monthlyUsage;
}

const monthlyUsageResult = calculateMonthlyUsage(energyUsage);

const MonthlyUsage = () => {
    const valueFormatter = (value) => `${value}kWh`;

const chartSetting = {
  yAxis: [
    {
      label: 'electricity usage (kwh)',
    },
  ],
  series: [{ dataKey: 'usage', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
    ["& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-label"]: {
      fill: "#ffffff"
    },
    ["& .css-34hspi .MuiChartsAxis-line"]: {
      stroke: "#ffffff"
    },
    ["& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-tickLabel"]: {
      fill: "#ffffff"
    },
    ["& .css-1h2zijw-MuiChartsAxisHighlight-root"]: {
      fill: "#00ff74"
    }
  },
};

const TickPlacementBars = () => {
 
  return (
    <div style={{ width: '100%' }}>
      <BarChart
        dataset={monthlyUsageResult}
        xAxis={[
          { scaleType: 'band', dataKey: 'month'},
        ]}
        colors={['#45CE83']}
        {...chartSetting}
      />
    </div>
  );
}

  return (
    <div className='monthly-usage'>
      <h5 className="section-title">Monthly Usage</h5>
      <TickPlacementBars />
    </div>
  )
}

export default MonthlyUsage
