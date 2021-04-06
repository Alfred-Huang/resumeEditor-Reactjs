import React, {Component, Fragment} from 'react';


class Education extends Component {
    render() {
        return (
            <Fragment>
                <div >
                    <div className="resume-section">
                        <div className="resume-section-title" style={{marginLeft: 30}}>
                            EDUCATION
                        </div>
                        <div>
                            <div className="resume-divider"/>
                        </div>
                        <div  style={{marginBottom: 5,marginLeft: 30}}>
                            <div className="resume-content-title">
                                <div style={{display: "inline-block", width: 534}}>
                                    School
                                </div>
                                <div  style={{textAlign:"right",display: "inline-block", width: 200}}>
                                    Spring 2021 - Fall 2024
                                </div>
                            </div>
                            <p style={{marginBottom: 2}}>major</p>
                            <div>
                                <div >
                                    content 荣誉啊 什么什么的
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Education;
