import React, {Component, Fragment, } from 'react';
import {Button, Card, Col, Row, Avatar, Input, Modal, Popconfirm } from "antd";
import {PlusOutlined, UserOutlined} from '@ant-design/icons';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import {addResume, deleteResume, updateResume} from "../../../redux/actions/userSection_action";
import { v4 as uuidv4 } from 'uuid';


class BuildResume extends Component {
    state = {
        isModalVisible: false,
        title: "",
    }

    componentDidMount() {
        const userId = sessionStorage.getItem("user_token")
        let api = global.AppConfig.serverIP + "/main"
        axios.post(api, {userId: userId}).then((result)=>{
            this.props.updateResume(result.data)
        })
    }


    handleClick = (id)=>{
        this.props.history.push({pathname: "/resume2", state: {resumeId: id}})
    }

    handleOk = () =>{
        const newResumeId = uuidv4()
        const data = {resumeId: newResumeId, userId: sessionStorage.getItem("user_token"), resumeTitle: this.state.title}
        let api = global.AppConfig.serverIP + "/main/addResume"
        axios.post(api,  data).then((result)=>{
            if(result.status === 200){
                const newResume = {resumeId: newResumeId, resume: {userId: "", resumeTitle: this.state.title}}
                this.props.addResume(newResume)
            }
        })
        this.setState({isModalVisible: false})
    }

    handleCancel = () =>{
        this.setState({isModalVisible: false})
    }

    handleDelete = (id) =>{
        let api = global.AppConfig.serverIP + "/main/deleteResume"
        axios.post(api, {resumeId: id}).then(
            this.props.deleteResume(id)
        )
    }

    changeModal = () =>{
        this.setState({isModalVisible: true})
    }

    saveTitle = (event) =>{
        this.setState({title: event.target.value})
    }

    confirm = (id) =>{
        let api = global.AppConfig.serverIP + "/main/deleteResume"
        axios.post(api, {resumeId: id}).then(
            this.props.deleteResume(id)
        )
    }

    cancel = ()=>{
        return null
    }

    resumeList = ()=>{
        if((Object.getOwnPropertyNames(this.props.resumeState.resumeList).length === 0)){
            return null
        }

         return Object.keys(this.props.resumeState.resumeList).map(id=> (
                 <Col key={id} style={{textAlign: "center"}}>
                     <Row>
                        <Button  onClick={(e)=>this.handleClick(id)} style={{width: 100, height: 130}}>Resume</Button>
                     </Row>
                     <Row justify={"center"}>
                         <p style={{textAlign:"center", wordBreak: "break-all", width: 100, lineHeight: 1}}>{this.props.resumeState.resumeList[id].resumeTitle}</p>
                     </Row>
                     <Row justify={"center"}>
                         <Popconfirm
                             title="Are you sure to delete this task?"
                             onConfirm={(e) =>this.confirm(id)}
                             onCancel={(e)=>this.cancel()}
                             okText="Yes"
                         >
                             <Button  size={"small"}  danger>Delete</Button>
                         </Popconfirm>
                     </Row>
                 </Col>

           ))

    }

    addResumeButton = ()=>{
        if((Object.getOwnPropertyNames(this.props.resumeState.resumeList).length === 3)){
            return null
        }else {
            return  <Col>
                <Button  type="dashed" onClick={this.changeModal} style={{width: 100, height: 130}} icon={<PlusOutlined style={{fontSize: 30}}/>}/>
            </Col>
        }

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
                </Row>
                <Row justify="center" style={{marginTop: 150}}>
                    <Card  bordered={false} style={{width: 500, height: 230, borderTop: "1px solid #DEDBDB", borderBottom: "1px solid #DEDBDB"}}>
                        <Row gutter={70}>
                            {this.resumeList()}
                            {this.addResumeButton()}
                        </Row>
                    </Card>
                     <Modal destroyOnClose title="Title" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
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
    )(withRouter(BuildResume));
