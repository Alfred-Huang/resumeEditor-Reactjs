import React, {Component, Fragment} from 'react';
import {Row, Card, Col, Button,} from "antd";
import {EditOutlined, PlusOutlined,} from '@ant-design/icons';
import {DragDropContext,Draggable, Droppable} from 'react-beautiful-dnd';
import {connect} from "react-redux";
import Item from "./Item";
import ButtonList from "./ButtonList";
import "./index.css"
import {
    addModuleAction,
    deleteModuleAction,
    getModuleAction,
    updateModuleAction
} from "../../../../../redux/actions/userSection_action";
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
        buttonList: [
            {id: 1, name: "project"},
            {id: 2, name: "leadership"},
            {id: 3, name: "experience"},
            {id: 4, name: "summary"},
            {id: 5, name: "education"},
            {id: 6, name: "custom"}
        ]
    }

    componentDidMount() {
        this.s(this.props.modulesObj.modules)
    }

    show = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }

    s = (list)=>{
        let deletedState = list.filter(function (item){
            return item.id !== 1
        })
        let newState = {buttonList: deletedState}
        console.log(newState)
    }

    handleAddModule = (section) =>{
        const modulesList = this.props.modulesObj.modules
       const list = Array.from(modulesList);
       let max = 0;
       for(let n of list.values()){
           if(n.id > max){
               max = n.id
           }
       }
       let newId = max * 1  + 1
       const module = {id: newId + "",module: section};
        this.props.addModules(module)

    }

    handleDeleteModule = (sectionId) =>{
        this.props.deleteModules(sectionId)
    }

    onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const newModules = reorder(
            this.props.modulesObj.modules,
            result.source.index,
            result.destination.index
        );

      this.props.updateModules(newModules)
    }



    render() {
        const {showInputChange} = this.props;

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
                                    {this.props.modulesObj.modules.map((moduleObj, index)=>(
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
                                                            handleDeleteModule={this.handleDeleteModule}
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
                            <Row span={24} gutter={[16,16]}>
                                {this.state.buttonList.map((buttonName)=>{
                                   return <ButtonList key={buttonName.id} handleAddModule={this.handleAddModule} buttonTitle={buttonName.name}/>
                                })}
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}



export default connect(
    state => ({modulesObj: state.userSection}),
    {
        addModules:addModuleAction,
        deleteModules: deleteModuleAction,
        getModules: getModuleAction,
        updateModules: updateModuleAction,
    }
)(Section)
