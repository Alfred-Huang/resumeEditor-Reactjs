import React, {Component, Fragment} from 'react';
import {Popconfirm, Row, Card, Input, message} from "antd";
import {DeleteOutlined, EditOutlined, } from '@ant-design/icons';
import { Draggable } from 'react-beautiful-dnd';



class Item extends Component {
    show = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }


    render() {

        function confirm(id) {

        }
        function cancel(e) {

            message.error('Click on No');
        }

        const {module, id} = this.props;
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
                                       <EditOutlined onClick={this.show(module)}/>,
                                   ]}

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
