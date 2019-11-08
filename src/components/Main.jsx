import React from 'react';


class Main extends React.Component {
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
                                        My favorite library right now is React, I love developing in react and mobile development with
                                        React Native excites me. I have built and used many REST APIs however I'm really inspired by
                                        the switch to GraphQL and all that it has taught me.
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
                                            <div className="img-container">
                                                <img className="project-img" src="belchscreen.png" />

                                            </div>

                                            <div className="project-description">
                                                <p>
                                                    This project means a lot to me, yada, it is bascially
                                                    a really cool copy of yelp but with dish reviews instead of
                                                    restaurants
                                                </p>
                                                <p>
                                                    <a>Github</a>
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
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;