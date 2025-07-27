import React from "react";
import "./MyWork.css";
import { MyWork_data } from "./MyWork";
import theme_pattern from "../../icons/theme_pattern.svg";

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      

      <div className="mywork-achivements">
        <hr />
        <div className="mywork-achivement">
          <h1>5+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
      </div>

      <div className="mywork-containner">
        {MyWork_data.map((work, index) => 
        (
          <div key={index} className="mywork-item">
            <div className="mywork-card">
              <img src={work.w_img} alt={`Project ${work.w_no}`} />
            </div>
            <h2>{work.w_name}</h2>

            <div className="mywork-buttons">
              {work.w_live && (
                <a
                  href={work.w_live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mywork-btn live-btn"
                >
                  🔴 Live
                </a>
              )}
              {work.w_github && (
                <a
                  href={work.w_github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mywork-btn github-btn"
                >
                  🟣 GitHub
                </a>
              )}
            </div>
          </div>
        )
        // {
          // return (
            
          //   <a
          //     key={index}
          //     className="mywork-item"
          //     href={work.w_live}
          //     target="_blank"
          //     rel="noopener noreferrer"
          //   >
          //     <img src={work.w_img} alt={work.w_no} />
          //     <h2>{work.w_name}</h2>
          //   </a>
          // );
        // }
        )}
      </div>
      <div className="mywork-showmore">
        <p>Show More...</p>
      </div>
    </div>
  );
};

export default MyWork;
