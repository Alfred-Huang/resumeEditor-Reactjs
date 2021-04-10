import React, {Component, Fragment} from 'react';
import {Popconfirm, Row, Card, Input, message} from "antd";
import {DeleteOutlined, EditOutlined, } from '@ant-design/icons';




class Item extends Component {



    show = (section, id) =>{
        return ()=>{
            this.props.showInputChange(section, id)
        }
    }

    render() {
        const {module, id, handleDeleteModule} = this.props;
        function confirm(id) {
            return ()=>{
                handleDeleteModule(id)
                message.success("Successfully Delete")
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
                       <Input defaultValue={module} placeholder="Title" bordered={false}   suffix={<EditOutlined/>}  style={{width: 120}}/>
                   </Card>
               </Row>
            </Fragment>

        );
    }
}

export default Item;
