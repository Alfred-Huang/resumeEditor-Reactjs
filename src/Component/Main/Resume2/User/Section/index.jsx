import React, {Component, Fragment} from 'react';
import {Row, Card, Col, Button,} from "antd";
import {EditOutlined, PlusOutlined,} from '@ant-design/icons';
import {DragDropContext,Draggable, Droppable} from 'react-beautiful-dnd';
import {connect} from "react-redux";
import Item from "./Item";
import "./index.css"
import {addModuleAction, deleteModuleAction, getModuleAction} from "../../../../../redux/actions/userSection_action";
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);
    console.log(result)
    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
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

    componentDidMount() {
        console.log(this.props.modules)
    }

    show = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }

    handleAddModule = (section) =>{
        const {modules} = this.state
       const list = Array.from(modules);
       let max = 0;
       for(let n of list.values()){
           if(n.id > max){
               max = n.id
           }
       }
       const module = {id: max + 1,module: section};
        const newModules = [...modules, module];
       this.setState({modules: newModules})
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
                    <Row className="section-board" style={{height: 740, overflow: "auto"}}>
                        <Col span={24} >
                    <Row style={{margin: 10}} justify="center">
                        <Card
                            style={{width: 400, textAlign: "center",  boxShadow: "10 10 5 grey"}}
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
                        </Col>
                    </Row>
                </DragDropContext>


                <Row>
                    <Col span={24} style={{backgroundColor: "white"}}>
                        <Card size="small" title={"Add Modules"} headStyle={{height: 10, paddingLeft: 10, fontSize: 12 }}>
                            <Button onClick={(e) =>this.handleAddModule("project")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}}>Project</Button>
                            <Button onClick={(e) =>this.handleAddModule("leadership")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}} >Leadership</Button>
                            <Button onClick={(e) =>this.handleAddModule("experience")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}}>Experience</Button>
                            <Button onClick={(e) =>this.handleAddModule("summary")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}}>Summary</Button>
                            <Button onClick={(e) =>this.handleAddModule("education")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}}>Education</Button>
                            <Button onClick={(e) =>this.handleAddModule("custom")} type="primary"  icon={<PlusOutlined />} size={"small"} style={{marginLeft: 10}}>Custom</Button>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}



export default connect(
    state => ({modules: state.userSection}),
    {addMoules:addModuleAction, deleteModules: deleteModuleAction, getModules: getModuleAction}
)(Section)
