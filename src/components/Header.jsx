import { useState } from "react";
import WindowIcon from '@mui/icons-material/Window';
import { MdOutlineElectricBolt } from "react-icons/md";
import NavMenu from "./NavMenu";

const Header = () => {
  const [menuIsOpen, openMenu] = useState(false)

  const toggleMenu = () => {
    openMenu(!menuIsOpen)
    document.body.classList.toggle('no-scroll')
  } 

  return (
    <div className="header">
        <div onClick={toggleMenu} className="menu-icon"><WindowIcon /></div>
        <h4 className="logo">Smart Power</h4>
        <div className="user-name">
            <div className="user-icon"><MdOutlineElectricBolt /></div>
            <p>Alice</p>
        </div>

        {menuIsOpen && <NavMenu closeMethod={toggleMenu} />}
    </div>
  )
}

export default Header
