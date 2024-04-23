import { useContext } from "react"
import { usageContext } from "../context/UsageContext";

const DisplayTotal = () => {
  const {state} = useContext(usageContext);
  const price = (state.usage * 0.26725)+(state.days * 1.20);
  const roundedPrice = parseFloat(price).toFixed(2);
  return (
    <div className="display-box">
      <div className="total-kwh">
        <p className="title">Total kWh</p>
        <h2 className="value-display">{state.usage}kwh</h2>
        <p className="duration">During the period</p>
      </div>
      <div className="price">
        <p className="title">Price</p>
        <h2 className="value-display">${roundedPrice}</h2>
        <p className="duration">During the period</p>
      </div>
    </div>
  )
}

export default DisplayTotal
