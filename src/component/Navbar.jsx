import { useState } from "react";
import  "../App.css"
import { IoMenuOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import { IoMdClose } from "react-icons/io";
import { HiMiniLockClosed } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
export const Navbar=()=>{
    const [clicked,setClicked]=useState(false)
  
  const handleClick=()=>{
    setClicked(!clicked)
  }
  
//   console.log(clicked);
  
    return(
        <>
        <header>
            <nav className="parent">
                <div className="heading">Mahar Technical</div>
                <ul className="navbar">
                    <li className="list"><NavLink to="/home"> Home </NavLink>  </li>
                    <li className="list"><NavLink to="/about"> About </NavLink> </li>
                    <li className="list"><NavLink to="/country"> Country</NavLink> </li>
                    <li className="list"><NavLink to="/contact"> Contact </NavLink> </li>
                </ul>
                    <div className="menu" onClick={handleClick}>{clicked!==true?<IoMenuOutline />:<VscChromeClose />
 }</div>
            </nav>
            <div className={clicked?"main-items":"main-hide"}>
                <div className="menu-items">
                 <ul className="sidebar-list">
  <li className="sidebar-item"><NavLink to="/"> Home </NavLink> </li>
  <li className="sidebar-item"><NavLink to="/about"> About </NavLink></li>
  <li className="sidebar-item"><NavLink to="/country"> Country</NavLink></li>
  <li className="sidebar-item"><NavLink to="/contact"> Contact </NavLink></li>
</ul>

                </div>
            </div>
        </header>
        </>
    )
}