import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Row} from "antd";
import {Link, Route, Switch} from "react-router-dom";
import Resume from "../Resume";

class BuildResume extends Component {
    state = {identity: "none"}
    handleClick = (value)=>{
        this.setState({identity: value});
    }


    render() {
        return (
            <Fragment>
                <Row justify="center">
                    <Col>
                        <Card  style={{ width: 300 , marginTop: 100}}>
                          <Row justify="center">
                              <Col>
                                  <Link to="/resume">
                                     <Button onClick={()=>{this.handleClick("student")}}>Student</Button>
                                  </Link>
                              </Col>
                          </Row>
                        </Card>
                    </Col>
                    <Col offset={1} >
                        <Card  style={{ width: 300 , marginTop: 100}}>
                            <Row justify="center">
                                <Col>
                                    <Link to="/resume2">
                                        <Button onClick={()=>{this.handleClick("nonstudent")}}>Non-Student</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default BuildResume;
