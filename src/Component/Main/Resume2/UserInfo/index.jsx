import React, {Component, Fragment} from 'react';
import {Col, Row} from "antd";

class UserInfo extends Component {
    render() {
        return (
            <Fragment>
                <div >
                    <div className="resume-section">
                        <div className="resume-section-title" style={{marginLeft: 30}}>
                            Leadership
                        </div>
                        <div >
                            <div className="resume-divider"/>
                        </div>
                        <div  style={{marginBottom: 5 ,marginLeft: 30}}>
                            <div className="resume-content-title">
                                <div style={{display: "inline-block", width: 534}}>
                                    work name
                                </div>
                                <div  style={{textAlign:"right",display: "inline-block", width: 200}}>
                                    Spring 2021 - Fall 2024
                                </div>
                            </div>
                            <p style={{marginBottom: 3}}>role</p>
                            <div>
                                <div >
                                    内容
                                </div>
                            </div>
                        </div>

                        <div  style={{marginBottom: 5 ,marginLeft: 30}}>
                            <div className="resume-content-title">
                                <div style={{display: "inline-block", width: 534}}>
                                    work name
                                </div>
                                <div  style={{textAlign:"right",display: "inline-block", width: 200}}>
                                    Spring 2021 - Fall 2024
                                </div>
                            </div>
                            <p style={{marginBottom: 3}}>role</p>
                            <div>
                                <div >
                                    内容
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </Fragment>
        );
    }
}

export default UserInfo;
