import React, {Component, Fragment} from 'react';
import  {Button, Col, Form, Input, Row, DatePicker, Radio } from "antd";
import {LeftOutlined,} from '@ant-design/icons';
import Editor from "../../Editor";
import BraftEditor from 'braft-editor'
import ExperienceAction from "../../ExpericenAction";
import {connect} from "react-redux";
import {
    addExperience,
    deleteExperience,
    updateExperienceSectionInfo
} from "../../../../../../redux/actions/userSection_action";
import moment from 'moment';
import * as R from "ramda";


const monthFormat = 'MM/YYYY';
class ProjectInput extends Component {
    state={
        content: BraftEditor.createEditorState(null),
        outputHTML: '<p></p>',
        curSectionId:"",
        infoId: "",
        project: "",
        role: "",
        location:"",
        stateDate: "",
        endDate: "",

        information: {infoId: "", project: "asdasdas", role: "", location: "",
                        time: {start: "", end: ""},
                         content:""
                     },
        a: {diao: "1"}
    }

    // get the information from the target
    getInformation = (targetInfo) => {
        this.setState({information: targetInfo})
        console.log(targetInfo)
    }

    componentDidMount() {
        const s = "diao"
        console.log(this.state.a[s])
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

    //get the information from the targetSection to initialize the first section
    handleInformation = (sectionId, targetInfo) =>{
        this.setState(
            {infoId: targetInfo.infoId,
                    project: targetInfo.project,
                    role: targetInfo.role,
                    location: targetInfo.location,
                    startDate: targetInfo.startDate,
                    endDate: targetInfo.endDate,
                    }
            )
    }

    onInputChange = (type, e) =>{
        this.setState({[type]: e.target.value})
        const infoObj = {infoId: this.state.infoId, type: type, value: e.target.value}
        this.props.updateExperienceSectionInfo(infoObj)
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
                                        <Input onChange={(e)=>this.onInputChange("project", e)} value={this.state.project} />
                                    </Form.Item>
                                </Col>

                                <Col span={10}>
                                    <Form.Item label="Role:">
                                        <Input onChange={(e)=>this.onInputChange("role", e)} value={this.state.role}/>
                                    </Form.Item>
                                </Col>
                                <Col span={10} offset={4}>
                                    <Form.Item label="Location:">
                                        <Input onChange={(e)=>this.onInputChange("location", e)} value={this.state.location}/>
                                        <div dangerouslySetInnerHTML={{__html: outputHTML}}/>
                                    </Form.Item>
                                </Col>
                                <Col span={10}>
                                    <Form.Item label="Start Date">
                                        <DatePicker onChange={(e)=>this.onInputChange("timeStart", e)} picker="month" format={monthFormat} value={moment(this.state.startDate, monthFormat)}/>
                                    </Form.Item>
                                </Col>
                                <Col span={10} offset={4}>
                                    <Form.Item label="End Date">
                                        <DatePicker onChange={(e)=>this.onInputChange("timeEnd", e)} picker="month" format={monthFormat} value={moment(this.state.endDate, monthFormat)}/>
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
    state => ({experienceState: state.experienceInfoReducer}),
    {
        addExperience: addExperience,
        deleteExperience: deleteExperience,
        updateExperienceSectionInfo: updateExperienceSectionInfo,
    }
)(ProjectInput);
