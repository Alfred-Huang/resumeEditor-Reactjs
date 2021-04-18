import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Item from "./Item"
import {addExperience, deleteExperience} from "../../../../redux/actions/userSection_action";

class GeneralInfo extends Component {

    getItem = () =>{
        const id = this.props.moduleId
        const sectionId = this.props.experienceState.experiences[id].sectionId
        const sectionList = this.props.experienceState.sections[sectionId].sectionList
            for(let i = 0; i < sectionList.length; i++){
                const targetInfo = this.props.experienceState.information[sectionList[i]]
                    return <Item info={targetInfo}/>
            }

    }

    render() {
        return (
            <Fragment>
                <div >
                    <div className="resume-section">
                        <div className="resume-section-title" style={{marginLeft: 30}}>
                            Leadership
                        </div>
                        <div >
                            <div className="resume-divider"/>
                        </div>
                        {this.getItem()}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default  connect(
    state => ({experienceState: state.experienceInfoReducer})
)(GeneralInfo);
