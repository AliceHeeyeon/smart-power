import { HashRouter, Routes, Route } from 'react-router-dom'
import { UsageProvider } from './context/UsageContext'
import Home from './pages/Home'
import Gas from './pages/Gas'
import Solar from './pages/Solar'
import Contact from './pages/Contact'
import './css/App.css'

function App() {
  
  return (
    <>
    <UsageProvider>
      <HashRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/gas' element={<Gas/>}/>
            <Route path='/solar' element={<Solar/>}/>
            <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </HashRouter>
    </UsageProvider>
    </>
  )
}

export default App
