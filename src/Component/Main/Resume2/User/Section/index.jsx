import React, {Component, Fragment} from 'react';
import {Row, Card, Col, Button,} from "antd";
import {EditOutlined, PlusOutlined,} from '@ant-design/icons';
import {DragDropContext,Draggable, Droppable} from 'react-beautiful-dnd';
import Item from "./Item";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);
    console.log(result)
    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({

    userSelect: "none",

    // 拖拽的时候背景变化
    background: isDragging ? "#E8E7E7" : "#ffffff",

    ...draggableStyle
});


class Section extends Component {

    state = {
        modules: [
            {id: '1', module: "education"},
            {id: '2', module: "project"},
            {id: '3', module: "summary"},
            {id: '4', module: "leadership"},
            {id: '5', module: "custom"}
        ]
    }

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

    onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const newModules = reorder(
            this.state.modules,
            result.source.index,
            result.destination.index
        );

        this.setState({
            modules: newModules
        });
    }



    render() {
        const {deleteModule, showInputChange} = this.props;

        return (
            <Fragment>
                <DragDropContext onDragEnd={this.onDragEnd}>
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
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                    {this.state.modules.map((moduleObj, index)=>(
                                            <Draggable draggableId={moduleObj.id} key={moduleObj.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div   ref={provided.innerRef}
                                                           {...provided.draggableProps}
                                                           {...provided.dragHandleProps}
                                                           style={getItemStyle(
                                                               snapshot.isDragging,
                                                               provided.draggableProps.style
                                                           )}
                                                    >
                                                        <Item
                                                            key={moduleObj.id}
                                                            {...moduleObj}
                                                            deleteModule={deleteModule}
                                                            showInputChange={showInputChange}
                                                        />

                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                {provided.placeholder}
                            </div>
                    )}
                    </Droppable>
                </DragDropContext>


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
