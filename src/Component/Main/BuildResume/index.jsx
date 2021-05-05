import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Row, Avatar, Input, Modal} from "antd";
import {PlusOutlined, UserOutlined} from '@ant-design/icons';
import {Link, Route, Switch} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import {addResume, deleteResume, updateResume} from "../../../redux/actions/userSection_action";
import { v4 as uuidv4 } from 'uuid';


class BuildResume extends Component {
    state = {
        isModalVisible: false,
        title: ""
    }

    componentDidMount() {
        const userId = sessionStorage.getItem("user_token")
        let api = global.AppConfig.serverIP + "/main"
        axios.post(api, {userId: userId}).then((result)=>{
            const resumeList = result.data
            this.props.updateResume(resumeList)
        })
    }


    handleClick = (id)=>{
        // console.log(id)
        // return <Link to="/resume2"/>
    }

    handleOk = () =>{
        const newResumeId = uuidv4()
        const data = {resumeId: newResumeId, userId: sessionStorage.getItem("user_token"), resumeTitle: this.state.title}
        let api = global.AppConfig.serverIP + "/addresume"
        axios.post(api,  data).then((result)=>{
            if(result.status === 200){
                const newResume = {resumeId: newResumeId, userId: "", resumeTitle: this.state.title}
                this.props.addResume(newResume)
            }
        })
        this.setState({isModalVisible: false})
    }

    handleCancel = () =>{
        this.setState({isModalVisible: false})
    }

    changeModal = () =>{
        this.setState({isModalVisible: true})
    }

    saveTitle = (event) =>{
        this.setState({title: event.target.value})
    }

    resumeList = ()=>{
        if(this.props.resumeState.resumeList[0].resumeId === undefined){
            return null
        }

       return this.props.resumeState.resumeList.map((resume,index) => {

            return <Col key={resume.resumeId}>
                   <Button  onClick={this.handleClick(resume.resumeId)}
                            style={{width: 100, height: 130}}>Resume</Button>
                 </Col>

           })

    }


    render() {
        return (

            <Fragment>
                <Row justify="center">
                    <Col>
                        <Card  bordered={false} style={{ width: 300, marginTop: 50, borderTop: "1px solid #DEDBDB", borderBottom: "1px solid #DEDBDB"}}>
                          <Row>
                              <Col style={{marginLeft: "auto", marginRight: "auto"}}>
                                  <Avatar size={64} icon={<UserOutlined />} />
                              </Col>
                          </Row>
                            <Row >
                                <Col style={{marginLeft: "auto", marginRight: "auto"}}>
                                    {sessionStorage.getItem("user_name")}
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{marginLeft: "auto", marginRight: "auto", marginTop: 10}}>
                                    <Button size={"small"}>Sign out</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/*<Col offset={1} >*/}
                    {/*    <Card  style={{ width: 300 , marginTop: 100}}>*/}
                    {/*        <Row justify="center">*/}
                    {/*            <Col>*/}
                    {/*                <Link to="/resume2">*/}
                    {/*                    <Button onClick={()=>{this.handleClick("nonstudent")}}>Non-Student</Button>*/}
                    {/*                </Link>*/}
                    {/*            </Col>*/}
                    {/*        </Row>*/}
                    {/*    </Card>*/}
                    {/*</Col>*/}
                </Row>
                <Row justify="center" style={{marginTop: 150}}>
                    <Card  bordered={false} style={{width: 500, height: 180, borderTop: "1px solid #DEDBDB", borderBottom: "1px solid #DEDBDB"}}>
                        <Row gutter={70}>
                            {this.resumeList()}

                            {/*<Button  type="dashed" onClick={this.changeModal} style={{width: 100, height: 130}} icon={<PlusOutlined style={{fontSize: 30}}/>}/>*/}
                            {/*<Button  type="dashed" onClick={this.changeModal} style={{width: 100, height: 130}} icon={<PlusOutlined style={{fontSize: 30}}/>}/>*/}
                            {/*<Button  type="dashed" onClick={this.changeModal} style={{width: 100, height: 130}} icon={<PlusOutlined style={{fontSize: 30}}/>}/>*/}

                            {this.props.resumeState.resumeList.length === 3 ? null :
                                <Col>
                                    <Button  type="dashed" onClick={this.changeModal} style={{width: 100, height: 130}} icon={<PlusOutlined style={{fontSize: 30}}/>}/>
                                </Col>
                            }
                        </Row>
                    </Card>
                     <Modal title="Title" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                       <Input onChange={this.saveTitle}/>
                    </Modal>
                </Row>
            </Fragment>
        );
    }
}

export default connect(
    state => ({resumeState: state.resumeReducer}),
    {deleteResume: deleteResume, addResume: addResume, updateResume: updateResume}
    )(BuildResume);
