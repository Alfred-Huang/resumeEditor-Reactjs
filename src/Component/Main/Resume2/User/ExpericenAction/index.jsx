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
        console.log(this.props.currentSectionID)
        const targetSection = this.props.experienceState.experiences.find(item => item.id === this.props.currentSectionID)
        const getFirstSectionId = R.path(['sections', '0','sectionId'])
        const firstID = getFirstSectionId(targetSection)
        this.setState({defaultValue: firstID})
    }

    changeRadio = (id)=>{
        this.setState({defaultValue: id})
    }

    handleSection = (section, id) => {
        return <Radio onChange={(e)=>this.changeRadio(id)} value={id} key={id} />
    }

    findTheTargetSection (){
        // const targetSection = this.props.experienceState.experiences.find(item => item.id === this.props.currentSectionID)
        // console.log(targetSection)
        // targetSection.sections.map((section)=>{
        //     return this.handleSection(section, section.id)
        // })
            return "asdasdasdasd"
    }

    render() {
        return (
            <Fragment>
                <Radio.Group value={this.state.defaultValue}>
                    {this.findTheTargetSection()}
                    <Radio/>
                </Radio.Group>
                <Button icon={<PlusOutlined />}/>
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
