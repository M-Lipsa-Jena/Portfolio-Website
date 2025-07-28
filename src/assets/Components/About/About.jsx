import React from "react";
import './About.css'
import theme_pattern from '../../icons/theme_pattern.svg'
import aboutImage from '../../../assets/Images/IMG_20230813_103725_787~2-01~2.jpeg'

const About =() =>{
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />

            </div>
            <div className="about-section">
                <div className="about-left">
                    {/* my image */}
                    
                    <img src={aboutImage} alt="Lipsa Image" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am M. Lipsa Jena, an enthusiastic and dedicated individual passionate about front-end development. With a Bachelor of Technology in Computer Science Engineering from C V Raman Global University, I have honed my skills in HTML, CSS, JavaScript, and React.js. My journey into the world of web development has been fueled by a strong desire to create engaging and intuitive user interfaces.</p>
                        <p>My portfolio showcases a range of hands-on projects including a Weather Forecasting App that fetches live data using the OpenWeatherMap API, a Movie Search App powered by the OMDB API, and a E-Commerce website designed with modern layout techniques and engaging UI components. Each project highlights my ability to translate ideas into real-world applications using modular and scalable code.</p>
                        <p>My web development internship provided me with invaluable hands-on experience, further solidifying my understanding of best practices in coding, user interface design, and project management. I thrive in collaborative environments and am always eager to learn and adapt to new technologies.</p>
                        <p>I am now eager to bring my skills and passion for web development to a dynamic IT company, where I can contribute to innovative projects and continue to grow as a front-end developer. My goal is to create seamless, user-friendly web experiences that make a positive impact on users’ lives.</p>                        
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Node Js</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Mongo DB</p><hr style={{width:"40%"}}/></div>
                        <div className="about-skill"><p>Express Js</p><hr style={{width:"30%"}}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About


