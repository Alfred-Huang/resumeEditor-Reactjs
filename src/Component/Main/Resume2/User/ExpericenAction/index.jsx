import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {
    addExperience,deleteExperience,updateExperience
} from "../../../../../redux/actions/userSection_action";
import {Button, Radio} from "antd";
import { PlusOutlined} from '@ant-design/icons';




class ExperienceAction extends Component {
    changeRadio = (infoId)=>{
        this.setState({defaultValue: infoId})
        const targetSectionInfo = this.props.experienceState.information[infoId]
        this.props.handleInformation(infoId, targetSectionInfo)
    }

    addRadio = () =>{
        this.props.addInputSection();
    }

    findTheTargetSection (){
        const targetSectionId = this.props.experienceState.experiences[this.props.currentId].sectionId
        const targetInfoIdList = this.props.experienceState.sections[targetSectionId].sectionList;
       return  targetInfoIdList.map((infoId)=>{
                return<Radio onChange={(e)=>this.changeRadio(infoId)} value={infoId} key={infoId} />
             })

    }

    render() {
        return (
            <Fragment>
                <Radio.Group value={this.props.curInfoId}>
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
