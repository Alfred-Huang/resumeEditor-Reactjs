import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {
    addExperience,deleteExperience,updateExperience
} from "../../../../../redux/actions/userSection_action";
import {Button, Radio} from "antd";
import { PlusOutlined} from '@ant-design/icons';
import * as R from 'ramda'



class ExperienceAction extends Component {
    state = {defaultValue: "0"}

    componentDidMount() {
        const targetSectionId = this.props.experienceState.experiences[this.props.currentID].sectionId

        const firstSectionId = this.props.experienceState.sections[targetSectionId].sectionList[0];
        const firstSectionInfo = this.props.experienceState.information[firstSectionId]
        this.setState({defaultValue: firstSectionId})
        //send the id and targetSection to input section to initialize the first section
        this.props.handleInformation(firstSectionId, firstSectionInfo);
    }

    changeRadio = (sectionId)=>{
        this.setState({defaultValue: sectionId})
        const targetSectionInfo = this.props.experienceState.information[sectionId]
        this.props.handleInformation(sectionId, targetSectionInfo)
        console.log(sectionId)
    }

    addRadio = () =>{

    }

    findTheTargetSection (){
        const targetSectionId = this.props.experienceState.experiences[this.props.currentID].sectionId
        const targetSectionList = this.props.experienceState.sections[targetSectionId].sectionList;
       return  targetSectionList.map((sectionId)=>{
                return<Radio onChange={(e)=>this.changeRadio(sectionId)} value={sectionId} key={sectionId} />
             })

    }

    render() {
        return (
            <Fragment>
                <Radio.Group value={this.state.defaultValue}>
                    {this.findTheTargetSection()}
                </Radio.Group>
                <Button icon={<PlusOutlined />} onClick={(e)=>this.addRadio()}/>
            </Fragment>
        );
    }
}

export default connect(
    state => ({experienceState: state.experienceInfoReducer}),
    {
        addExperience: addExperience,
        deleteExperience: deleteExperience
    }
)(ExperienceAction);
