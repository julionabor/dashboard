import React from 'react'


import icon from "../../../assets/ion/man (1).png"

const Menu = () => {
  return (
  <>
  <div className='box-user'>
          <div><img src={icon} alt="User" /></div>
          <div>Hi, AC  <p>xyz@gmail.com</p></div>
        </div>
    <ul>
        <li>Dashboard</li>
        <li>Apps</li>
        <li>Charts</li>
        <li>Bootstrap</li>
        <li>Plugins</li>
        <li>Widget</li>
        <li>Forms</li>
    </ul>
  </>
  )
}

export default Menu