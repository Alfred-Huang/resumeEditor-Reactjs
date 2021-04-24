import React, {Component, Fragment} from 'react';
import {Row, Card, Col} from "antd";
import {EditOutlined,} from '@ant-design/icons';
import {DragDropContext,Draggable, Droppable} from 'react-beautiful-dnd';
import {connect} from "react-redux";
import Item from "./Item";
import ButtonList from "./ButtonList";
import {
    addExpSectionInfo,
    addModuleAction,
    deleteModuleAction,
    getModuleAction,
    updateModuleAction
} from "../../../../../redux/actions/userSection_action";
import { nanoid } from 'nanoid'
import "./index.css"
import {experienceInfoReducer} from "../../../../../redux/reduers/userSection_reducer";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
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
            {id: 3, name: "summary"},
            {id: 4, name: "education"},
            {id: 5, name: "custom"}
        ],
    }



    show = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }

    handleAddModule = (section) =>{
       let newModuleId = nanoid();
        if(section !== 'education') {
            let sectionId = nanoid()
            let informationId = nanoid()
            const data = {
                sectionId: sectionId, informationId: informationId, experienceId: newModuleId,
                newExperience: {id: newModuleId, module: section, title: section, sectionId: sectionId},
                newSection: {id: sectionId, sectionList: [informationId]},
                newInformation: {infoId: informationId, project: "", role: "", location: "",
                    startDate:"", endDate: "",
                    HTMLContent: "", RAWContent: {}
                }
            }
            this.props.addExpSectionInfo(data)
        }
        const module = {id: newModuleId + "",module: section};
        this.props.addModules(module)
    }

    handleDeleteModule = (sectionId) =>{
        this.props.deleteModules(sectionId)
    }

    onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if(this.props.experienceState.experiences[result.draggableId].module === "basicInfo"){
            return
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
                                        ))
                                    }

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
    state => ({modulesObj: state.moduleReducer, experienceState: state.experienceInfoReducer}),
    {
        addModules:addModuleAction,
        deleteModules: deleteModuleAction,
        getModules: getModuleAction,
        updateModules: updateModuleAction,
        addExpSectionInfo: addExpSectionInfo,
    }
)(Section)
