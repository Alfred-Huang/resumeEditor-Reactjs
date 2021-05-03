import React, {Component, Fragment} from 'react';
import {Link, Switch,} from 'react-router-dom';
import {Content, Header} from "antd/es/layout/layout";
import {Button, Col, Layout, Row, Avatar} from "antd";
import { UserOutlined } from '@ant-design/icons';
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
