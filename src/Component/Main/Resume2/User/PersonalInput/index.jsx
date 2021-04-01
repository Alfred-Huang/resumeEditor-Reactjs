import React, {Component, Fragment,useState, useMemo} from 'react';
import {Input, Space, Row, Col, Form, Button} from 'antd';
import {LeftOutlined, MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import Editor from "../Editor";
import 'react-quill/dist/quill.snow.css';



class UserInput extends Component {

    goBack = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }

    render() {
        return (
            <Fragment >
                <Button onClick={this.goBack("default")} icon={<LeftOutlined />}  style={{boxShadow: 2}}/>
                <Row>
                    <Col span={24}>
                        <Form
                              size='middle'
                              layout="inline"
                              style={{marginTop: 10, marginLeft: 40, marginRight: 40}}
                        >
                            <Row gutter={[8, 24]} style={{marginBottom: 20}}>
                                <Col span={24}>
                                    <Form.Item label="Name">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Tel">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Email">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Location">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Other">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" style={{marginBottom: 10}}>Save</Button>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default UserInput;
