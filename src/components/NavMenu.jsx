import { Link } from "react-router-dom"
import FirstPageIcon from '@mui/icons-material/FirstPage';

const NavMenu = ({closeMethod}) => {

  return (
    <>
      <div className="background-filter"></div>
      <div className="nav-menu">
        <div className="nav-close" onClick={closeMethod}>
            <FirstPageIcon />
        </div>

        <div className="page-menu">
          <ul>
            <li>
              <Link to='/' onClick={closeMethod}>Electricity</Link>
            </li>
            <li>
              <Link to='/gas' onClick={closeMethod}>Gas</Link>
            </li>
            <li>
              <Link to='/solar' onClick={closeMethod}>Solar</Link>
            </li>
          </ul>
        </div>

        <div className="contact">
            <Link to='/contact' onClick={closeMethod}>Contact Us</Link>
        </div>

      </div>
    </>
    
  )
}

export default NavMenu
