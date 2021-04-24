import React, {Component, Fragment} from 'react';
import {Popconfirm, Row, Card, Input, message} from "antd";
import {DeleteOutlined, EditOutlined, } from '@ant-design/icons';
import {connect} from "react-redux";
import {
    updateModuleTitle
} from "../../../../../../redux/actions/userSection_action";




class Item extends Component {

    // to show the input section when user click the target section
    show = (section, id) =>{
        return ()=>{
            this.props.showInputChange(section, id)
        }
    }

    handleTitleChange = (e) =>{
        if(this.props.experienceState.experiences[this.props.id].module === "basicInfo"){
            return
        }
        const title = e.target.value
        const data = {experienceId: this.props.id, title: title}
        this.props.updateModuleTitle(data)
    }

    render() {
        const {module, id, handleDeleteModule} = this.props;
        const title = this.props.experienceState.experiences[id].title
        const curModule = this.props.experienceState.experiences[id].module
        function confirm(id) {
            return ()=>{
                if(curModule !== "basicInfo"){
                    handleDeleteModule(id)
                    message.success("Successfully Delete")
                }else{
                    message.error("This module can not delete");
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
                       <Input  defaultValue={title}
                               onChange={(e)=>this.handleTitleChange(e)}
                               placeholder="Title"
                               bordered={false}
                               suffix={<EditOutlined/>}
                               style={{width: 120}}
                       />
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
