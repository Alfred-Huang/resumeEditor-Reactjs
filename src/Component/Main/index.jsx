import React, {Component, Fragment} from 'react';
import {Link, Route, Switch,Redirect} from 'react-router-dom';
import {Content, Header} from "antd/es/layout/layout";
import {Button, Col, Layout, Row} from "antd";
import BuildResume from "./BuildResume";
import Welcome from "./Welcome";
import Resume from "./Resume";
import Resume2 from "./Resume2"
import "./index.css";



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
                            <Route path="/" component={Welcome} exact/>
                            <Route path="/identity" component={BuildResume}/>
                            <Route path="/resume" component={Resume}/>
                            <Route path="/resume2" component={Resume2}/>
                            <Redirect to="/"/>
                        </Switch>
                    </Content>
                </Layout>
            </Fragment>
        );
    }
}

export default Main;
