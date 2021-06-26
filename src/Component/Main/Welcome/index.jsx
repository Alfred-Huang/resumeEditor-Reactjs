import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Row} from "antd";
import './config'
import axios from "axios";
import Login from "./Login";
import "./index.css";


class Welcome extends Component {


    render() {
        return (
            <Fragment>
                <Row justify="center">
                    <Col >
                        <Login/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}
export default Welcome;
