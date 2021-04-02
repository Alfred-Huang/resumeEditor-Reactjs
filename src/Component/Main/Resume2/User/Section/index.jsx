import React, {Component, Fragment} from 'react';
import {Row, Card, Col, Button,} from "antd";
import {EditOutlined, PlusOutlined,} from '@ant-design/icons';
import Item from "./Item";
class Section extends Component {

    show = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }

    handleAddModule = (section) =>{
        return ()=>{
            this.props.addModule(section)
        }
    }

    render() {
        const {modules, deleteModule, showInputChange} = this.props;

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

                    {
                        modules.map((moduleObj)=>{
                            return <Item key={moduleObj.id} {...moduleObj} deleteModule={deleteModule} showInputChange={showInputChange}/>
                        })
                    }

                <Row>
                    <Col span={24} style={{backgroundColor: "white"}}>
                        <Card size="small" title={"Add Modules"} headStyle={{height: 10, paddingLeft: 10, fontSize: 12 }}>
                            <Button onClick={this.handleAddModule("project")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}}>Project</Button>
                            <Button onClick={this.handleAddModule("leadership")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}} >Leadership</Button>
                            <Button onClick={this.handleAddModule("experience")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}}>Experience</Button>
                            <Button onClick={ this.handleAddModule("summary")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}}>Summary</Button>
                            <Button onClick={this.handleAddModule("education")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}}>Education</Button>
                            <Button onClick={this.handleAddModule("custom")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}}>Custom</Button>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Section;
