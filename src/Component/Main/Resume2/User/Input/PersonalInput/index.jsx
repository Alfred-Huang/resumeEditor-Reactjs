import React, {Component, Fragment} from 'react';
import {Button, Col, Form, Input, Row, Alert, notification, message, Modal} from "antd";
import {LeftOutlined,} from '@ant-design/icons';
import {connect} from "react-redux";
import {
    updateExperienceSectionInfo
} from "../../../../../../redux/actions/userSection_action";
import axios from "axios";



class BasicInfoInput extends Component {
    state={
        curSectionId:"",
        infoId: "",
        name: "",
        email: "",
        telephone:"",
        other: "",
        personalLocation:"",
        curInfoId: "",
        save: true,
        isModalVisible: false
    }

    componentDidMount() {
        const targetSectionId = this.props.experienceState.experiences[this.props.currentId].sectionId
        const firstInfoId = this.props.experienceState.sections[targetSectionId].infoIdList[0];
        const firstSectionInfo = this.props.experienceState.information[firstInfoId]
        //send the id and targetSection to input section to initialize the first section
        this.setState(
            { infoId: firstSectionInfo.infoId,
                name: firstSectionInfo.name,
                email: firstSectionInfo.email,
                telephone: firstSectionInfo.telephone,
                personalLocation: firstSectionInfo.personalLocation,
                other: firstSectionInfo.other,
                curInfoId: firstInfoId,
            }
        )
    }


    handleOk = () =>{
        this.updatePersonalInfo()
        this.setState({save: true, isModalVisible: false}, ()=>{
            this.goBack("default")
        })
    }

    handleCancel = ()=>{
        this.setState({save: true, isModalVisible: false }, ()=>{
            this.goBack("default")
        })
    }

    goBack = (section) =>{
        return () => {
            if(this.state.save) {
                this.props.showInputChange(section)
            }else{
                this.setState({isModalVisible: true})
            }
        }
    }

    onInputChange = (type, e) =>{
        this.setState({[type]: e.target.value, save: false})
        const infoObj = {infoId: this.state.infoId, type: type, value: e.target.value}
        this.props.updateExperienceSectionInfo(infoObj)
    }

    success = () => {
        message.success('Success');
    }

    error = () => {
        message.error('Fail');
    };

    updatePersonalInfo = ()=>{
        // let api = global.AppConfig.serverIP + "/resume/updatePersonalInfo"
        // const data = this.props.experienceState.information[this.state.infoId];
        // axios.post(api, data).then(()=>{
        //    this.success()
        //     this.setState({save: true})
        // }).catch(()=>{
        //     this.error()
        //     this.setState({save: true})
        // })
        this.success()
        this.setState({save: true})
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
                                            onChange={(e)=>this.onInputChange("personalLocation", e)}
                                            value={this.state.personalLocation}/>
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
                            <Button type="primary" style={{marginBottom: 10}} onClick={(e)=>this.updatePersonalInfo()} >Save</Button>
                        </Form>
                    </Col>
                </Row>
                <Modal destroyOnClose visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>save the content before you leave</p>
                </Modal>
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
