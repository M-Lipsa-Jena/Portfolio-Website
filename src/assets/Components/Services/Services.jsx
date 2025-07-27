import React from "react";
import './Services.css'
import theme_pattern from '../../icons/theme_pattern.svg'
import { Service_data } from './Service_data.js'

const Services =()=>{
    return(
        <div>
            <div id="service" className="services-title">
                <h1>My</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {Service_data.map((Services,index) =>{
                    return <div key={index} className="services-format">
                        <h3>{Service_data.s_no}</h3>
                        <h2>{Service_data.s_nmae}</h2>
                        <p>{Service_data.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <img></img>
                        </div>
                    </div>
                })}

            </div>

        </div>
    )
}
export default Services