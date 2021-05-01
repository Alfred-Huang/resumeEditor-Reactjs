import React, {Component, Fragment} from 'react';
import {Link, Route, Switch,Redirect, withRouter} from 'react-router-dom';
import {Content, Header} from "antd/es/layout/layout";
import {Button, Col, Layout, Row} from "antd";
import BuildResume from "./BuildResume";
import Home from "./Welcome";
import Resume from "./Resume";
import Resume2 from "./Resume2"
import routes from './router'
import "./index.css";
import renderRoutes from "./utils/renderRouter";


const authed = false;
const authPath = '/'
class Main extends Component {
    render() {
        return (
            <Fragment>
                <Layout>
                    <Header>
                        <Row className="menu">
                            <Col span={3} offset={3}>
                                <Link to="/">
                                    <Button className="label" type="link">ResumeSolver</Button>
                                </Link>
                            </Col>
                            <Col span={2} offset={13}>
                                <Button className="login" type="link">Login</Button>
                            </Col>
                        </Row>
                    </Header>
                    <Content>
                        <Switch>
                            {renderRoutes(routes, authed, authPath)}
                        </Switch>
                    </Content>
                </Layout>
            </Fragment>
        );
    }
}

export default Main;
