import React from 'react';


class Main extends React.Component {

    handleMouseOver() {
        console.log('moused');
    }
    render() {
        return (
            <div className="main">
                <div className="container">

                    <div className="sidebar">
                        <div className="sidebar-main">
                            <div className="image-container" style={{ textAlign: "center" }}>
                                <img className="avatar-image" src="headshot.jpg" />
                                <h1 className="name-header">Caleb Fowler</h1>
                                <p className="sub-header">New York, NY</p>
                                <p className="sub-header" style={{lineHeight: "10px"}}>650 793 9975</p>
                            </div>
                            <nav className="main-nav">
                                <ul className="main-nav-ul">
                                    <li><a href="#about-slide">About</a></li>
                                    <li><a href="#portfolio-slide">Portfolio</a></li>
                                    <li><a href="#resume-slide">Resume</a></li>
                                    <li><a href="https://www.github.com/cfowler650" target="_blank">Github </a></li>
                                    <li><a href="https://www.linkedin.com/in/caleb-fowler-086542126/LinkedIn" target="_blank">LinkedIn </a> </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="slide-container">

                            <a id="about-slide" style={{display: "hidden"}}></a>
                        <section class="slide">

                            <div className="slide-contents">
                                <div className="slide-contents-inner">
                                    <div className="slide-header">
                                        <h1>About</h1>
                                    </div>
                                    <p className="text" style={{fontSize: "1em"}}>
                                        I'm a web developer with experience in front end and back end technologies.
                                        I fell in love with programming at a young age and have aspired to do it professionally ever since.
                                        My favorite library right now is ReactJS, I love developing in react and have multiple projects using
                                        react as the client. I have experience building full stack applications with various tech stacks, including
                                        MERN and a Rails / PostgreSQL. Examples can be found in the Projects section below. I'm very excited for the
                                        future of programming and new technologies always fascinate me right now my favorite being GraphQL as an alternative
                                        to traditional REST API design.
                                    </p>

                                     <h2 style={{
                                            margin: "1em 0px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5em", fontFamily: "nunito-extrabold",
                                        }}>Skills</h2>

                                    <div className="skills-container">


                                        <div className="title-div">
                                            <p className="list-title">Front</p>
                                            <ul className="skills">
                                                <li className="list-skill">React</li>
                                                <li className="list-skill">Javascript</li>
                                                <li className="list-skill">SASS</li>
                                                <li className="list-skill">CSS</li>
                                                <li className="list-skill">HTML</li>
                                            </ul>
                                        </div>
                                        <div className="title-div">
                                            <p className="list-title" style={{background: "green"}}>Back</p>
                                            <ul className="skills" style={{background: "green"}}>
                                                <li className="list-skill">Rails</li>
                                                <li className="list-skill">Node</li>
                                                <li className="list-skill">Express</li>
                                                <li className="list-skill">REST</li>
                                                <li className="list-skill">GraphQL</li>
                                                <li className="list-skill">SQL</li>
                                                <li className="list-skill">PostgreSQL</li>
                                                <li className="list-skill">MongoDB</li>
                                            </ul>
                                        </div>

                                        <div className="title-div">
                                            <p className="list-title" style={{background: "darkred"}}>Stack</p>
                                            <ul className="skills" style={{background: "darkred"}}>
                                                <li className="list-skill">MERN</li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                                <a id="portfolio-slide" style={{display: "hidden"}}></a>

                            </div>
                        </section>
                        <section class="slide">
                            <div className="slide-contents">
                                <div className="slide-contents-inner">
                                    <div className="slide-header" style={{width: "10.9em"}}>
                                        <h1>Projects</h1>
                                    </div>
                                    <div className="project-div">
                                        <div className="project-title-test">
                                            <h1>Belch</h1>
                                            <p className="text">
                                                <a id="project-link"
                                                style={{textDecoration: "underline"}}
                                                href="https://github.com/cfowler650/Belch"
                                                target="_blank" > VIEW CODE</a>
                                            </p>
                                            <p className="text">
                                                <a id="project-link"
                                                style={{textDecoration: "underline"}}
                                                href="https://test-rails-app-belch.herokuapp.com/"
                                                target="_blank" > VIEW PROJECT </a>
                                            </p>

                                        </div>

                                        <div className="project-contents">
                                            <div className="img-container" style={{ cursor: "pointer" }}>
                                                <img className="project-img" src="belchscreen.png" onClick={() => window.open("https://test-rails-app-belch.herokuapp.com/", "_blank")} />
                                            </div>

                                            <div className="project-description">
                                                <p className="text" style={{fontSize: "15.1px"}}>
                                                    Belch is a web app inspired by yelp that serves as a solution for the paradox of choice at a restaurant.
                                                    Users are encouraged to take a picture of, rate, and review their meal after they are finished eating.
                                                    This user generated data then serves to help future patrons find the best dish to order on the menu, without
                                                    the head ache or the possibility of ordering a sub-par meal, saving them wasted money and precious time.

                                                </p>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a id="resume-slide" style={{display: "hidden"}}></a>
                            </div>
                        </section>
                        <section class="slide">
                            <div className="slide-contents">
                                <div className="slide-contents-inner">
                                    <div className="slide-header" style={{width: "8.7em"}}>
                                        <h1>Resume</h1>
                                    </div>
                                    <div className="project-div" style={{ marginBottom: "3em" }}>
                                        <div className="project-title">
                                            <h2 className="job-title">App Academy</h2>
                                            <h3 className="job-sub-title">Software Engineering Student</h3>
                                        </div>

                                        <div className="project-contents">

                                            <div className="project-description" style={{ paddingLeft: 0 }}>
                                                <p id="job-text" className="text" style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                                                    Graduated from immersive 16-week full stack in-person web development course.
                                                    Received 1000+ hours education in Object-Oriented Programming and Test-Driven Development
                                                    as well as advanced algorithms, REST API best practices, and data structures.
                                                    Built full stack applications using MERN and similar architectures.
                                                    (Ruby on Rails, JavaScript, React, Redux, PostgreSQL, Node, MongoDB, Express)
                                                </p>


                                            </div>
                                        </div>
                                    </div>

                                    <div id="job-div" className="project-div">
                                        <div className="project-title">
                                            <h2 className="job-title" >Element Critical</h2>
                                             <h3 className="job-sub-title">Contracted Web Developer</h3>
                                        </div>

                                        <div className="project-contents">

                                            <div className="project-description" style={{ paddingLeft: 0 }}>
                                                <p id="job-text" className="text" style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                                                    Architected a full stack web application to serve viable metrics from a data acquisition system.
                                                    Implemented Flask and Python API to hook into Splunk SIEM to retrieve data and serve it to UI;
                                                    The client side then manipulated that data further to provide valuable analytics for the finance department through an interactive site-map,
                                                    empowering them with a fast and intuitive solution for billing customers. (Python, Flask, Javascript).
                                                </p>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </div >
        )
    }
}

export default Main;