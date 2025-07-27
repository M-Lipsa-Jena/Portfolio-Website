import React, { useState } from 'react'
import './Navbar.css'

// import underline from '../../../assets/nav_underline.svg' 
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () =>{

    const [menu,setMenu] =useState("home");


    return(

        <div className='navbar'> 
            <img className='Logo' src='./src/assets/Components/Nav Bar/LIPSA Logo/Blue Black Minimal Initial Letter Company Technology Logo.png' alt='Lipsa Logo' />

            <ul className='nav-menu'>

                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#home'>
                        <p onClick={()=>setMenu("home")}>Home</p>
                    </AnchorLink>
                    {/* {menu==="home"?<img src={underline} alt=''/>:<></>} */}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#about'>
                        <p onClick={()=>setMenu("about")}>About me</p>
                    </AnchorLink>
                    {/* {menu==="about"?<img src={underline} alt=''/>:<></>} */}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#Myskill'>
                        <p onClick={()=>setMenu("Myskill")}>Skills</p>
                    </AnchorLink>
                    {/* {menu==="Myskill"?<img src={underline} alt=''/>:<></>} */}
                </li>

                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#mywork'>
                        <p onClick={()=>setMenu("mywork")}>Projects</p>
                    </AnchorLink>
                    {/* {menu==="mywork"?<img src={underline} alt=''/>:<></>} */}
                </li>

                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#contact'>
                        <p onClick={()=>setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {/* {menu==="contact"?<img src={underline} alt=''/>:<></>} */}
                </li>

            </ul>

        </div>
    )
}
export default Navbar