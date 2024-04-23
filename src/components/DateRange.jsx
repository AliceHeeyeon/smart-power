import {useEffect, useState, useContext} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import energyUsage from '../../Data.json'
import { actionTypes } from "../hooks/usageReducer";
import { usageContext } from "../context/UsageContext";

    
function calculateUsageInRange(data, startDate, endDate) {
    let totalUsage = 0;
    let countDay = 0;

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    
    data.forEach(entry => {
        const entryDate = new Date(entry.date);

        if (
            entryDate.getFullYear() === startDateObj.getFullYear() &&
            entryDate.getMonth() === startDateObj.getMonth() &&
            entryDate.getDate() === startDateObj.getDate()
        ) {
            totalUsage += entry.usage;
            countDay++;
        } 
        if (entryDate > startDateObj && entryDate <= endDateObj) {
            totalUsage += entry.usage;
            countDay++;
        }

    });

    return { totalUsage, countDay };
}

const newFormattedData = [];
function newFormedData(data) {
 
    data.forEach(entry =>{
        const [day, month, year] = entry.date.split('-').map(Number);
        const date = new Date(2000 + year, month - 1, day);
        const usage = entry.usage;
        const integerUsage = Math.floor(usage);
        const newData = { month: entry.month, date: date, usage: integerUsage }
        newFormattedData.push(newData)
    })
}
newFormedData(energyUsage);

const DateRange = () => {
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    }); 

    const { state, dispatch } = useContext(usageContext);

    const handleValueChange = (newValue) => {
        setValue(newValue); 
    } 

   useEffect(() => {
    if (value.startDate && value.endDate) {
        const accumulatedUsage = calculateUsageInRange(newFormattedData, value.startDate, value.endDate);
        dispatch({ type: actionTypes.SET_USAGE, payload: accumulatedUsage.totalUsage });
        dispatch({ type: actionTypes.SET_DAY_COUNT, payload: accumulatedUsage.countDay });
    }
   },[value.startDate, value.endDate, dispatch])

  return (
    <div className="energy-consumption-gauge">
        <h5 className="section-title">Energy Consumption</h5>
        <div className="date-picker">
            <Datepicker 
            primaryColor={"emerald"} 
            value={value} 
            onChange={handleValueChange}
            showShortcuts={true}  
            />
        </div>

        <div className="gauge">
            <Stack 
                direction={{ xs: 'column', md: 'row' }}  
                spacing={{ xs: 1, md: 3 }}
            >
                <Gauge 
                    width={100} 
                    height={100} 
                    value={state.usage} 
                    valueMin={1} 
                    valueMax={500}
                    text={({ value }) => `${value}`}
                />
            </Stack>
        </div>
       
    </div>
  )
}

export default DateRange
