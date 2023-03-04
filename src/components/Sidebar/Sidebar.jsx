import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data'

function Sidebar() {
  return (
    <div className="sidebar">
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" srcset="" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>
        {/* menu */}
        <div className="menu">
           {SidebarData.map((item, index) => {
                return (
                     <div className="menuItem" >
                          <item.icon/>
                          <span>{item.heading}</span>
                     </div>
                )
           })}
           
        </div>
    </div>
  )
}

export default Sidebar