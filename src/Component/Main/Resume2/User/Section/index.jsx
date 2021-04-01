import React, {Component, Fragment} from 'react';
import { Row, Card, Input} from "antd";
import {DeleteOutlined, EditOutlined, } from '@ant-design/icons';
class Section extends Component {
    state = {
        modules: [
            {id: "001", module: "personal"},
            {id: "001", module: "education"},
            {id: "001", module: "project"},
            {id: "001", module: "summary"},
            {id: "001", module: "leadership"},
            {id: "001", module: "custom"}
        ]
    }
    show = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }

    updateModule(){

    }

    render() {
        const {module} = this.props;

        return (
            <Fragment>
                <Row style={{margin: 10}} justify="center">
                    <Card
                        style={{width: 400, textAlign: "center"}}
                        actions={[
                            <EditOutlined onClick={this.show("personal")}/>,
                        ]}
                        hoverable="true"
                        size="small"
                    >
                        Basic Information
                    </Card>
                </Row>

                <Row style={{margin: 10}} justify="center">
                    <Card
                        style={{width: 400, textAlign: "center"}}
                        actions={[
                            <EditOutlined onClick={this.show("education")}/>,
                        ]}
                        hoverable="true"
                        size="small"
                    >
                       Education
                    </Card>
                </Row>

                <Row style={{margin: 10}} justify="center">
                    <Card
                        style={{width: 400, textAlign: "center"}}
                        actions={[
                            <DeleteOutlined />,
                            <EditOutlined onClick={this.show("project")}/>,
                        ]}
                        hoverable="true"
                        size="small"
                    >
                        <Input defaultValue={"Project"} placeholder="Title" bordered={false}   suffix={<EditOutlined/>}  style={{width: 120}}/>
                    </Card>
                </Row>

                <Row style={{margin: 10}} justify="center">
                    <Card
                        style={{width: 400, textAlign: "center"}}
                        actions={[
                            <DeleteOutlined style={{display: "none"}}/>,
                            <EditOutlined onClick={this.show("summary")}/>,
                        ]}
                        hoverable="true"
                        size="small"
                    >
                        <Input  defaultValue={"Summary"} placeholder="Title" bordered={false}   suffix={<EditOutlined/>}  style={{width: 120}}/>
                    </Card>
                </Row>

                <Row style={{margin: 10}} justify="center">
                    <Card
                        style={{width: 400, textAlign: "center"}}
                        actions={[
                            <DeleteOutlined />,
                            <EditOutlined onClick={this.show("leadership")}/>,
                        ]}
                        hoverable="true"
                        size="small"
                    >
                        <Input defaultValue={"Leadership"} placeholder="Title" bordered={false}   suffix={<EditOutlined/>}  style={{width: 120}}/>
                    </Card>
                </Row>

                <Row style={{margin: 10}} justify="center">
                    <Card
                        style={{width: 400, textAlign: "center"}}
                        actions={[
                            <DeleteOutlined />,
                            <EditOutlined onClick={this.show("custom")}/>,
                        ]}
                        hoverable="true"
                        size="small"
                    >
                        <Input  defaultValue={"Custom"} placeholder="Title" bordered={false}   suffix={<EditOutlined/>}  style={{width: 120}}/>
                    </Card>
                </Row>
            </Fragment>
        );
    }
}

export default Section;
