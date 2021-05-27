import React, {Component, Fragment} from 'react';
import {Alert, Button, Col, Form, Row,notification} from "antd";
import {LeftOutlined,} from '@ant-design/icons';
import Editor from "../../Editor";
import BraftEditor from 'braft-editor'
import {connect} from "react-redux";
import {
    updateExperienceSectionInfo
} from "../../../../../../redux/actions/userSection_action";
import axios from "axios";






class SummaryInput extends Component {

    state={
        curSectionId:"",
        infoId: "",
        curInfoId: "",
        content:  BraftEditor.createEditorState(null),
    }
    componentDidMount() {
        const targetSectionId = this.props.experienceState.experiences[this.props.currentId].sectionId
        const firstInfoId = this.props.experienceState.sections[targetSectionId].infoIdList[0];
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
        const h = {infoId: this.state.infoId, type: "HTMLContent", value: HTMLContent}
        this.props.updateExperienceSectionInfo(h)
    }


    openNotificationWithIcon = type => {
        notification[type]({
            message: 'Successfully Save',
        });
    };

    updateSummary = ()=>{
        let api = global.AppConfig.serverIP + "/resume/updateSummary"
        const data = {HTMLContent: this.props.experienceState.information[this.state.infoId].HTMLContent, infoId: this.state.infoId};
        axios.post(api, data).then((result)=>{
            this.openNotificationWithIcon('success')
        })
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
                            <Button type="primary" style={{marginBottom: 10, marginTop: 10}} onClick={(e)=>this.updateSummary()} >Save</Button>
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
