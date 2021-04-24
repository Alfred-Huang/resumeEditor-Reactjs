import React, {Component, Fragment} from 'react';
import  {Button, Col, Form, Row, } from "antd";
import {LeftOutlined,} from '@ant-design/icons';
import Editor from "../../Editor";
import BraftEditor from 'braft-editor'
import {connect} from "react-redux";
import {
    updateExperienceSectionInfo
} from "../../../../../../redux/actions/userSection_action";




class SummaryInput extends Component {

    state={
        curSectionId:"",
        infoId: "",
        curInfoId: "",
        content:  BraftEditor.createEditorState(null),
    }
    componentDidMount() {
        const targetSectionId = this.props.experienceState.experiences[this.props.currentId].sectionId
        const firstInfoId = this.props.experienceState.sections[targetSectionId].sectionList[0];
        const firstSectionInfo = this.props.experienceState.information[firstInfoId]
        //send the id and targetSection to input section to initialize the first section
        this.setState(
            {
                infoId: firstSectionInfo.infoId,
                curInfoId: firstInfoId,
                content:  BraftEditor.createEditorState(firstSectionInfo.HTMLContent)
            }
        )
    }

    goBack = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }

    handleContent = (userContent) =>{
        this.setState({
            content: userContent
        })
        const HTMLContent = userContent.toHTML();
        const RAWContent = userContent.toRAW();
        const h = {infoId: this.state.infoId, type: "HTMLContent", value: HTMLContent}
        const r = {infoId: this.state.infoId, type: "RAWContent", value: RAWContent}
        this.props.updateExperienceSectionInfo(h)
        this.props.updateExperienceSectionInfo(r)
    }



    render() {

        return (
            <Fragment >
                <Button onClick={this.goBack("default")} icon={<LeftOutlined />}  style={{boxShadow: 2}}/>
                <Row>
                    <Col span={24}>
                        <Form
                            size='middle'
                            layout="vertical"
                            style={{ marginLeft: 40, marginRight: 40}}
                            wrapperCol={{span: 24}}
                        >
                            <Editor content={this.state.content} handleContent={this.handleContent}/>
                            <Button type="primary" style={{marginBottom: 10, marginTop: 10}}>Save</Button>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default connect(
    state => ({experienceState: state.experienceInfoReducer}),
    {
        updateExperienceSectionInfo: updateExperienceSectionInfo
    }
)(SummaryInput);
