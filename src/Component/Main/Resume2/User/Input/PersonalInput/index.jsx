import React, {Component, Fragment} from 'react';
import  {Button, Col, Form, Input, Row } from "antd";
import {LeftOutlined,} from '@ant-design/icons';
import {connect} from "react-redux";
import {
    updateExperienceSectionInfo
} from "../../../../../../redux/actions/userSection_action";



class BasicInfoInput extends Component {
    state={
        curSectionId:"",
        infoId: "",
        name: "",
        email: "",
        telephone:"",
        other: "",
        curInfoId: "",
    }

    componentDidMount() {
        const targetSectionId = this.props.experienceState.experiences[this.props.currentId].sectionId
        const firstInfoId = this.props.experienceState.sections[targetSectionId].sectionList[0];
        const firstSectionInfo = this.props.experienceState.information[firstInfoId]
        //send the id and targetSection to input section to initialize the first section
        this.setState(
            { infoId: firstSectionInfo.infoId,
                name: firstSectionInfo.name,
                email: firstSectionInfo.email,
                telephone: firstSectionInfo.telephone,
                location: firstSectionInfo.location,
                other: firstSectionInfo.other,
                curInfoId: firstInfoId,
            }
        )
    }

    goBack = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }

    onInputChange = (type, e) =>{
        this.setState({[type]: e.target.value})
        const infoObj = {infoId: this.state.infoId, type: type, value: e.target.value}
        this.props.updateExperienceSectionInfo(infoObj)
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
                                        <Input  onChange={(e)=>this.onInputChange("name", e)}
                                                value={this.state.name}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Tel">
                                        <Input  onChange={(e)=>this.onInputChange("telephone", e)}
                                                value={this.state.telephone}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Email">
                                        <Input
                                            onChange={(e)=>this.onInputChange("email", e)}
                                                       value={this.state.email}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Location">
                                        <Input
                                            onChange={(e)=>this.onInputChange("location", e)}
                                            value={this.state.location}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Other">
                                        <Input
                                            onChange={(e)=>this.onInputChange("other", e)}
                                            value={this.state.other}/>
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

export default connect(
    state => ({experienceState: state.experienceInfoReducer}),
    {
        updateExperienceSectionInfo: updateExperienceSectionInfo,
    }
)(BasicInfoInput);
