import React from "react";
import "./MySkills.css";
import theme_pattern from "../../icons/theme_pattern.svg";

function Myskill() {
  return (
    <div id="Myskill" className="Myskill">
      <div className="Myskill-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="Myskills-containner">
        <div className="Myskills-item">
          <div className="skill-html">
            <div className="skill-logo">
              <img
                src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                alt="HTML Logo"
              />
            </div>
            <h3>HTML 5</h3>
            <p>
              I have experience building responsive and accessible websites
              using HTML. I have a strong understanding of semantic HTML and
              accessibility best practices. I have worked with a variety of HTML
              elements, including forms, tables, and multimedia elements.
            </p>
          </div>
          <div className="skill-css">
            <div className="skill-logo">
              <img
                src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                alt="CSS Logo"
              />
            </div>
            <h3>CSS 3</h3>
            <p>
              I have experience styling websites using CSS. I have a strong
              understanding of CSS concepts such as layout, positioning, and
              animations. I have worked with a variety of CSS frameworks. I have
              also worked with CSS preprocessors such as Sass and Less.
            </p>
          </div>
          <div className="skill-javascript">
            <div className="skill-logo">
              <img
                src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                alt="JavaScript Logo"
              />
            </div>
            <h3>JavaScript</h3>
            <p>
              Proficient in core JavaScript (ES6+) for dynamic and interactive
              front-end development. Strong understanding of DOM manipulation,
              asynchronous programming (Promises, async/await), closures, and
              event handling. Experienced in building modular, scalable web
              apps.
            </p>
          </div>
          <div className="skill-react">
            <div className="skill-logo">
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                alt="React Logo"
              />
            </div>
            <h3>React</h3>
            <p>
              Skilled in developing fast, component-based SPAs using React.
              Experienced with React Hooks, state management, and routing (React
              Router). Built real-world projects with reusable components and
              API integrations for dynamic data rendering.
            </p>
          </div>
          <div className="skill-node">
            <div className="skill-logo">
              <img
                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                alt="Node.js Logo"
              />
            </div>
            <h3>Node.js</h3>
            <p>
              I have experience building scalable and efficient back-end
              applications using Node.js. I have worked with a variety of
              frameworks, including Express, Koa, and Hapi.
            </p>
          </div>
          <div className="skill-Mongo">
            <div className="skill-logo-Mongo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                alt="MongoDB Logo"
              />
            </div>
            <h3>MongoDB</h3>
            <p>
              Proficient in using MongoDB to design, query, and manage efficient
              data models for seamless data handling. Experienced in integrating
              MongoDB with Node.js to build robust full-stack applications.
            </p>
          </div>
          <div className="skill-Express">
            <div className="skill-logo-Express">
              <img
                src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF"
                alt="Express.js Logo"
              />
            </div>
            <h3>Express.js</h3>
            <p>
              {" "}
              Hands-on experience in developing REST APIs using Express.js.
              Built secure, modular, and maintainable backend services with
              route handling, middleware, and error management. Used in
              full-stack projects with MongoDB and React.
            </p>
          </div>
          <div className="skill-github">
            <div className="skill-logo">
              <img
                src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                alt="GitHub Logo"
              />
            </div>
            <h3>Git & GitHub</h3>
            <p>
              Proficient in using Git for version control and GitHub for
              collaborative development. Experienced in branching, pull
              requests, code reviews, and maintaining open-source projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myskill;
