import React, {Component, Fragment} from 'react';
import  {Button, Col, Form, Input, Row, DatePicker, Radio } from "antd";
import {LeftOutlined,} from '@ant-design/icons';
import Editor from "../../Editor";
import BraftEditor from 'braft-editor'
import ExperienceAction from "../../ExpericenAction";
import {connect} from "react-redux";
import {addExperience, deleteExperience} from "../../../../../../redux/actions/userSection_action";
import * as R from "ramda";



class ProjectInput extends Component {
    state={
        content: BraftEditor.createEditorState(null),
        outputHTML: '<p></p>',
        curSectionId:"",
        sectionInfo: {information: {project: "", role: "", city: "",
                time:[
                    {start: ""},
                    {end: ""}
                ]
            }, content: ""},
        a: "2111111"
    }

    getInformation = (targetExperience) => {
        const curId = this.state.curSectionId;
        console.log(curId)
        const targetSection = targetExperience.sections.find(item => item.sectionId === curId)
        const newInformation = {information:targetSection.information, content: targetSection.content }
        this.setState({sectionInfo: newInformation})
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

    handleInformation = (sectionId, targetSection) =>{
        this.setState({curSectionId: sectionId}, () => this.getInformation(targetSection))

    }

    onInputChange = (event) =>{
        // let val = event.target.val
        // const a = this.state.sectionInfo.information
        // a.project = val;
        //
        // this.setState({sectionInfo: a},()=>{console.log(this.state.sectionInfo)})
        this.setState({a: event.target.value})
    }

    render() {
        const { editorState, outputHTML } = this.state
        return (
            <Fragment>
                <Row style={{display: "line block"}} span={24}>
                    <Col span={2}>
                        <Button onClick={this.goBack("default")} icon={<LeftOutlined />}  style={{boxShadow: 2}}/>
                    </Col>
                    <Col span={20} style={{textAlign: "center"}}>
                        <ExperienceAction handleInformation={this.handleInformation} currentID={this.props.currentId} currentSection={"project"}/>
                    </Col>
                    <Col span={2}/>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form
                            size='middle'
                            layout="vertical"
                            style={{ marginLeft: 40, marginRight: 40}}
                            wrapperCol={{span: 24}}
                        >
                            <Row >
                                <Col span={24}>
                                    <Form.Item label="Project Name:">
                                        <Input onChange={this.onInputChange} value={this.state.a} />
                                    </Form.Item>
                                </Col>

                                <Col span={10}>
                                    <Form.Item label="Role:">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col span={10} offset={4}>
                                    <Form.Item label="City:">
                                        <Input/>
                                        <div dangerouslySetInnerHTML={{__html: outputHTML}}/>
                                    </Form.Item>
                                </Col>
                                <Col span={10}>
                                    <Form.Item label="Start">
                                        <DatePicker  picker="month" />
                                    </Form.Item>
                                </Col>
                                <Col span={10} offset={4}>
                                    <Form.Item label="End">
                                        <DatePicker  picker="month" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Editor handleContent={this.handleContent}/>
                            <Row span={24}>
                                <Col span={12}>
                                    <Button type="primary" style={{marginBottom: 10, marginTop: 10}}>Save</Button>
                                </Col>

                                <Col span={12} style={{textAlign: "right"}}>
                                    <Button type="danger" style={{marginBottom: 10, marginTop: 10}}>Delete</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default  connect(
    state => ({experienceState: state.experienceReducer}),
    {
        addExperience: addExperience,
        deleteExperience: deleteExperience
    }
)(ProjectInput);
