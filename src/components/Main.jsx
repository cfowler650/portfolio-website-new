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
                            <div classaName="image-container" style={{ textAlign: "center" }}>
                                <img className="avatar-image" src="headshot.jpg" />
                                <h1 className="name-header">Caleb Fowler</h1>
                                <p className="sub-header">New York, New York</p>
                            </div>
                        </div>
                    </div>

                    <div class="slide-container">
                        <section class="slide">
                            <div className="slide-contents">
                                <div className="slide-contents-inner">
                                    <div className="slide-header">
                                        <h1>About</h1>
                                    </div>
                                    <p className="text">
                                        I'm a web developer with experience in front end and back end technologies.
                                        I fell in love with programming at a young age and have aspired to do it professionally ever since.
                                        My favorite library right now is ReactJS, I love developing in react and have multiple projects using
                                        react as the client. I have experience building full stack applications with various tech stacks, including
                                        MERN and a Rails / PostgreSQL. Examples can be found in the Projects section below. I'm very excited for the
                                        future of programming and new technologies always fascinate me right now my favorite being GraphQL as an alternative
                                        to traditional REST API design.
                                    </p>

                                    <div>
                                        <h2 style={{
                                            margin: "1em 0px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5em", fontFamily: "nunito-extrabold",
                                        }}>Skills</h2>
                                        <ul style={{ paddingLeft: "20px" }}>
                                            <li>React</li>
                                            <li>Ruby on Rails</li>
                                            <li>REST</li>
                                            <li>GraphQL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="slide">
                            <div className="slide-contents">
                                <div className="slide-contents-inner">
                                    <div className="slide-header">
                                        <h1>Projects</h1>
                                    </div>
                                    <div className="project-div">
                                        <div className="project-title">
                                            <h1>Belch</h1>
                                        </div>

                                        <div className="project-contents">
                                            <div className="img-container" style={{ cursor: "pointer" }}>
                                                <img className="project-img" src="belchscreen.png" onClick={() => window.open("https://test-rails-app-belch.herokuapp.com/", "_blank")} />
                                            </div>

                                            <div className="project-description">
                                                <p className="text">
                                                    Belch is a web app inspired by yelp that reviews individual menu items versus restaurants.
                                                    This app is designed to help the user locate and select the best item at the restaurant they are
                                                    eating at based on user reviews, real dish images, and a star rating system.
                                                </p>
                                                <p className="text"> <a href="https://github.com/cfowler650/Belch" target="_blank"> View this project on Github</a>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="slide">
                            <div className="slide-contents">
                                <div className="slide-contents-inner">
                                    <div className="slide-header">
                                        <h1>Resume</h1>
                                    </div>
                                    <div className="project-div" style={{ marginBottom: "3em" }}>
                                        <div className="project-title">
                                            <h2 className="job-title">App Academy</h2>
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