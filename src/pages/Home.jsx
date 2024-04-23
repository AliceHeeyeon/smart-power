import Header from "../components/Header"
import DateRange from "../components/DateRange"
import MonthlyUsage from "../components/MonthlyUsage"
import DailyUsage from "../components/DailyUsage"
import UserPlan from "../components/UserPlan"
import DisplayTotal from "../components/DisplayTotal"
import { useState, useEffect } from "react"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(timeout)
    }
  },[])

  if (loading) {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    )
  }

  return (
    <div className="home">
        <Header />
        <div className="contents-wrapper">
          <UserPlan />
          <DateRange />
          <DisplayTotal />
          <MonthlyUsage />
          <DailyUsage />
        </div>
    </div>
  )
}

export default Home
