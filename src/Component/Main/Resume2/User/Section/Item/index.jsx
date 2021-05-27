import React, {Component, Fragment} from 'react';
import {Popconfirm, Row, Card, Input, message, Modal} from "antd";
import {DeleteOutlined, EditOutlined, } from '@ant-design/icons';
import {connect} from "react-redux";
import {
    updateModuleTitle
} from "../../../../../../redux/actions/userSection_action";
import axios from "axios";




class Item extends Component {

    state = {
        isModalVisible: false,
        title: "",
    }

    // to show the input section when user click the target section
    show = (section, id) =>{
        return ()=>{
            this.props.showInputChange(section, id)
        }
    }

    handleTitleChange = (e) =>{
        const title = e.target.value
        const data = {experienceId: this.props.id, title: title}
        this.props.updateModuleTitle(data)
    }

    handleVisible = ()=>{
        this.setState({isModalVisible: true})
    }

    handleOk = ()=>{
        if(this.props.experienceState.experiences[this.props.id].module === "basicInfo"){
            return null
        }
        let api = global.AppConfig.serverIP + "/resume/updateSectionTitle"
        const data = {experienceId: this.props.id, title: this.state.title}
        this.props.updateModuleTitle(data)
        axios.post(api, data).then((result)=>{
            this.props.updateModuleTitle(data)
        })
        this.setState({isModalVisible: false})
    }

    handleCancel = () =>{
        this.setState({isModalVisible: false})
    }

    saveTitle = (e)=>{
        console.log(e.target.value.length)
        this.setState({title: e.target.value})
    }

    render() {
        const {module, id, handleDeleteModule} = this.props;
        const title = this.props.experienceState.experiences[id].title
        const curModule = this.props.experienceState.experiences[id].module

        //handle the delete feature
        function confirm(id) {
            return ()=>{
                if(curModule !== "basicInfo"){
                    handleDeleteModule(id)
                    message.success("Successfully Delete")
                }else{
                    message.error("This module can not be deleted");
                }

            }

        }
        function cancel(e) {
            message.error('Cancel Delete');
        }

        return (
           <Fragment>
               <Row  justify="center"  style={{padding: 10}}>
                   <Card
                       style={{width: 400, textAlign: "center"}}
                       actions={[
                           <Popconfirm
                               title="Are you sure to delete this module?"
                               onConfirm={confirm(id)}
                               onCancel={cancel}
                               okText="Yes"
                               cancelText="No"
                           >
                               <DeleteOutlined/>
                           </Popconfirm>,
                           <EditOutlined onClick={this.show(module, id)}/>,
                       ]}
                       hoverable="true"
                       size="small"
                   >
                       <Input  value={title}
                               // onChange={(e)=>this.handleTitleChange(e)}
                               // placeholder="Title"
                               bordered={false}
                               onClick={this.handleVisible}
                               suffix={<EditOutlined/>}
                               style={{width: 120}}
                       />
                       <Modal destroyOnClose title="Section Title" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                           <Input defaultValue={title} maxLength={20} onChange={this.saveTitle}/>
                       </Modal>
                   </Card>
               </Row>
            </Fragment>

        );
    }
}

export default connect(
    state => ({experienceState: state.experienceInfoReducer}),
    {
        updateModuleTitle: updateModuleTitle
    }
)(Item);
