import React, {Component, Fragment} from 'react';
import {Row, Card, Col} from "antd";
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
import { v4 as uuidv4 } from 'uuid';
import "./index.css"
import axios from "axios";


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
        if(this.props.modulesObj.modules.length === 8) {
            return null;
        }
        let newModuleId = uuidv4()
        let sectionId = uuidv4()
        let informationId = uuidv4()
        const newData = {
            sectionId: sectionId, informationId: informationId, experienceId: newModuleId,
            newExperience: {id: newModuleId, module: section, title: section, sectionId: sectionId, resumeId: this.props.resumeId},
            newSection: {sectionId: sectionId, infoIdList: [informationId]},
            newInformation: {infoId: informationId, project: "", role: "", location: "",
                startDate:"", endDate: "",
                HTMLContent: "",name: "", telephone: "", email:"", personalLocation: "", other: ""

            }
        }
        let curMaxSortId = 0
        this.props.modulesObj.modules.forEach((item)=>{
            if(item.sortId > curMaxSortId){
                curMaxSortId = item.sortId;
            }
        })
        curMaxSortId += 1;
        const newModule = {id: newModuleId + "", resumeId: this.props.resumeId, module: section, sortId: curMaxSortId};
        let data = {newData, newModule}

        // let api = global.AppConfig.serverIP + "/resume/addModule"
        // axios.post(api, data).then((result)=>{
        //     this.props.addExpSectionInfo(newData)
        //     this.props.addModules(newModule)
        // }).catch(function (error) {
        //     window.alert("fail to add")
        // })
        this.props.addExpSectionInfo(newData)
        this.props.addModules(newModule)
    }

    handleDeleteModule = (sectionId) =>{
        // let api = global.AppConfig.serverIP + "/resume/deleteModule"
        // const target = {id: sectionId}
        // axios.post(api, target).then((result)=>{
        //     this.props.deleteModules(sectionId)
        // })
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

        let curId = 1
        newModules.forEach((item)=>{
            item.sortId = curId
            curId++;
        })
        // let api = global.AppConfig.serverIP + "/resume/updateModuleSortId"
        // axios.post(api, newModules).then((result)=>{
        //     this.props.updateModules(newModules)
        // })
        this.props.updateModules(newModules)
    }



    render() {
        const {showInputChange} = this.props;

        return (
            <Fragment>
                <p style={{zIndex: 2, margin: 0,  marginLeft: 20 }}>{this.props.modulesObj.modules.length }/8</p>
                <div style={{zIndex: 1}}>
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
                </div>


                <Row style={{zIndex: 1}}>
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
