import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Layout, Row} from "antd";
import "./index.css";

class Welcome extends Component {
    render() {
        return (
            <Fragment>
                <Row justify="center">
                    <Col>
                        <Link to="/identity">
                            <Button className="start-button" type="primary" >Build</Button>
                        </Link>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}
export default Welcome;
