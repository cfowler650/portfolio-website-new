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

                </div>
            </div>
        )
    }
}

export default Main;