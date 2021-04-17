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
        const targetExperience = this.props.experienceState.experiences.find(item => item.id === this.props.currentID)
        const getFirstSectionId = R.path(['sections', '0','sectionId'])
        const firstID = getFirstSectionId(targetExperience)
        this.setState({defaultValue: firstID})
        this.props.handleInformation(firstID, targetExperience);
    }

    changeRadio = (id)=>{
        this.setState({defaultValue: id})
        const targetExperience = this.props.experienceState.experiences.find(item => item.id === this.props.currentID)
        this.props.handleInformation(id, targetExperience)
    }

    addRadio = () =>{

    }

    findTheTargetSection (){
        const targetExperience = this.props.experienceState.experiences.find(item => item.id === this.props.currentID)
       return  targetExperience.sections.map((section,)=>{
                return<Radio onChange={(e)=>this.changeRadio(section.sectionId)} value={section.sectionId} key={section.sectionId} />
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
    state => ({experienceState: state.experienceReducer}),
    {
        addExperience: addExperience,
        deleteExperience: deleteExperience
    }
)(ExperienceAction);
