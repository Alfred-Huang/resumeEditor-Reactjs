import React, {Component, Fragment} from 'react';
import {Button, Col, Form, Input, Row} from "antd";
import {LeftOutlined, MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import Editor from "../Editor";
import BraftEditor from 'braft-editor'




class EducationInput extends Component {
    state={
        content: BraftEditor.createEditorState(null),
        outputHTML: '<p></p>',
    }

    goBack = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }

    handleContent = (userContent) =>{
        this.setState({
            content: userContent,
            outputHTML: userContent.toHTML()
        })
    }

    render() {
        const { editorState, outputHTML } = this.state
        return (
            <Fragment >
                <Button onClick={this.goBack("default")} icon={<LeftOutlined />}  style={{boxShadow: 2}}/>
                <Row>
                    <Col span={24}>
                        <Form
                            size='middle'
                            layout="vertical"
                            style={{ marginLeft: 40, marginRight: 40}}
                            wrapperCol={{span: 20}}
                        >
                            <Row >
                                <Col span={12}>
                                    <Form.Item label="School:">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Major:" >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="学历:">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="City:">
                                        <Input/>
                                        <div dangerouslySetInnerHTML={{__html: outputHTML}}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Date:">
                                        <Input placeholder="Ex: Spring 2020"/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label=" ">
                                        <Input placeholder="Ex: Fall 2024"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Editor handleContent={this.handleContent}/>
                            <Button type="primary" style={{marginBottom: 10, marginTop: 10}}>Save</Button>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default EducationInput;
