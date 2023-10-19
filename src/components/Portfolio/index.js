import React from "react";
import HEROKU5 from "../../assets/small/HEROKU5.png";
import Node1 from "../../assets/small/Node1.png";
import SVG from "../../assets/small/SVG.4.png";
import TECHWORD from "../../assets/small/TECHWORD.png";
import UpdatedWebsite from "../../assets/small/UpdatedWebsite.png";
import WDScheduler2 from "../../assets/small/WDScheduler2.png";
import WeatherApp2 from "../../assets/small/WeatherApp2.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">

        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://smarquis85.github.io/C1-Horiseon/">
                {" "}
                <img
                  src={UpdatedWebsite}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="UpdatedWebsite"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>C1-Horiseon</h4>
              <p>
                To refactor an existing site to make it more accessible.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://smarquis85.github.io/C5-TheWDScheduler/">
                {" "}
                <img
                  src={WDScheduler2}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WDScheduler2"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>C5-TheWDScheduler</h4>
              <p>
                This Challenge was to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app runs in the browser and features dynamically updated HTMLs and CSSs powered by jQuery. It was important to use the Day.js library to work with date and time.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://smarquis85.github.io/C6-WeatherApp/">
                {" "}
                <img
                  src={WeatherApp2}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WeatherApp2"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>C6-WeatherApp</h4>
              <p>
                This challenge was to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/SMarquis85/C10-SVGLOGO">
                {" "}
                <img
                  src={SVG}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="SVG"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>C10-SVGLogo</h4>
              <p>
                This app empowers freelance web developers to create custom logos without hiring a graphic designer. It uses inquirer to prompt users for logo preferences, such as up to three characters of text, text color, and shape (triangle, square, or circle) with a corresponding color. After answering the prompts, the app generates an SVG file with the user's selections. Unit testing was applied, for the first time, with a test suite consisting of three tests to ensure accurate shapes and colors. This app showcases the potential of back-end developers and the importance of unit testing, even for small projects. I wanted to add minor error handling for the first prompt, limiting text input to three characters. Future development on this application could start with making the logo centered, adding on more error handling (SVG colors), additional unit testing, and adding more polygons and font styles for users to choose from.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mysterious-citadel-25361-70154c7c7fe8.herokuapp.com/">
                {" "}
                <img
                  src={HEROKU5}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="HEROKU5"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>C11-PersonalJottings</h4>
              <p>
                To create an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end, saves and retrieves note data from a JSON file. The application’s front end has already been created. Starter code was cloned from this repository: https://github.com/coding-boot-camp/miniature-eureka . It was our job to build the back end, connect the two and then deploy the entire application to Heroku.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/SMarquis85/C12-SQLEmployeeTracker">
                {" "}
                <img
                  src={Node1}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Node1"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>C12-SQLEmployeeTracker</h4>
              <p>
                Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Our assignment was to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://frozen-tundra-42313-1be74e9a646c.herokuapp.com/">
                {" "}
                <img
                  src={TECHWORD}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="TECHWORD"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>C14-MVCBlog</h4>
              <p>
                Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!
                Our challenge was to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I had to build this site completely from scratch and deploy it to Heroku. The app needed to follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://aqueous-taiga-27039-c166d4a2cb34.herokuapp.com/">
                {" "}
                <img
                  src={IWANTTHIS}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="IWANTTHIS"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Final Project</h4>
              <p>
              With our group, we again had to conceive and execute a design that solves a real-world problem. In creating our first collaborative MERN-stack single-page application, we had to combine a scalable MongoDB back end, a GraphQL API, and an Express.js and Node.js server with a React front end, implementing user authentication with JWT to build a user-focused platform. We continued to build on the agile development methodologies we’ve used throughout this course. These include storing our project code in GitHub, managing our work with a project management tool, and implementing feature and bug fixes using the Git branch workflow and pull requests. For this project, we started from scratch. Doing so will allowed us to revisit our front-end abilities in the context of React and solidify our understanding of working with multiple servers in a MERN application. Our skills have continued to improve since the first two projects, so naturally our approach was different considering the experience we’ve gained with each new application we’ve built. Our group used everything we’ve learned throughout this course to create a MERN-stack single-page application that works with real-world data to solve a real-world challenge, with a focus on data and user demand. This project provides us with the best opportunity to demonstrate our problem-solving skills, which employers will want to observe.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;