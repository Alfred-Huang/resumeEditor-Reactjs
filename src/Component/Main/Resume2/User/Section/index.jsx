import React, {Component, Fragment} from 'react';
import {Row, Card, Col} from "antd";
import {EditOutlined, PlusSquareOutlined} from '@ant-design/icons';
import {DragDropContext,Draggable, Droppable} from 'react-beautiful-dnd';
import {connect} from "react-redux";
import Item from "./Item";
import ButtonList from "./ButtonList";
import {
    addModuleAction,
    deleteModuleAction,
    getModuleAction,
    updateModuleAction
} from "../../../../../redux/actions/userSection_action";
import { nanoid } from 'nanoid'
import "./index.css"

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
        ],
        // experiences: {
        //     "lgCeTDkAvYlDobUgwfBQN": {id:  "lgCeTDkAvYlDobUgwfBQN", module: "education", title: "education", sectionId: "1"},
        //     "JVPGlab2QGb7TLXXl8pgw": {id: "JVPGlab2QGb7TLXXl8pgw", module: "project", title: "project", sectionId:"2"},
        // },
        //
        // sections: {
        //     "1": {sectionId: "1", sectionList: ["1", "2", "3"]},
        //     "2": {sectionId: "2", sectionList: ["4", "5", "6"]},
        // },
        //
        // information: {
        //     "1": {infoId: "1", school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
        //         time:[
        //             {start: "spring 2024"},
        //             {end: "fall 2025"}
        //         ],
        //         content:""
        //     },
        //
        //     "2": {infoId: "2", school: "beida", major: "B.A. CS", degree: "master", location: "Flushing",
        //         time:[
        //             {start: "spring 2024"},
        //             {end: "fall 2025"}
        //         ],
        //         content:""
        //     },
        //
        //     "3": {infoId: "3", school: "qianghua", major: "B.A. CS", degree: "master", location: "Flushing",
        //         time:[
        //             {start: "spring 2024"},
        //             {end: "fall 2025"}
        //         ],
        //         content:""
        //     },
        //
        //     "4": {infoId: "4", project: "buzhidao", role: "manager", city: "flushing",
        //         time:[
        //             {start: "spring 2024"},
        //             {end: "fall 2025"}
        //         ],
        //         content:""
        //     },
        //
        //     "5": {infoId: "5", project: "buzhidao", role: "manager", city: "flushing",
        //         time:[
        //             {start: "spring 2024"},
        //             {end: "fall 2025"}
        //         ],
        //         content:""
        //     },
        //
        //     "6": {infoId: "6", project: "buzhidao", role: "manager", city: "flushing",
        //         time:[
        //             {start: "spring 2024"},
        //             {end: "fall 2025"}
        //         ],
        //         content:""
        //     },
        //
        // }
    }

    componentDidMount() {
        // console.log(this.state.experiences["lgCeTDkAvYlDobUgwfBQN"].sectionId)
        // console.log(this.state.sections["1"].sectionList[0])
        // console.log(this.state.information["2"])
    }

    show = (section) =>{
        return ()=>{
            this.props.showInputChange(section)
        }
    }

    handleAddModule = (section) =>{
       let newId = nanoid();
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
    state => ({modulesObj: state.moduleReducer}),
    {
        addModules:addModuleAction,
        deleteModules: deleteModuleAction,
        getModules: getModuleAction,
        updateModules: updateModuleAction,
    }
)(Section)
