import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Item from "./Item"


class Education extends Component {


    getItem = () =>{
        const id = this.props.moduleId
        const sectionId = this.props.experienceState.experiences[id].sectionId
        const sectionList = this.props.experienceState.sections[sectionId].sectionList
        return sectionList.map( itemId =>{
            const targetInfo = this.props.experienceState.information[itemId]
            return   <Item information={targetInfo} key={targetInfo.infoId}/>
        })
    }

    render() {
        return (
            <Fragment>
                <div >
                    <div className="resume-section">
                        <div className="resume-section-title" style={{marginLeft: 40}}>
                            EDUCATION
                        </div>
                        <div>
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
)(Education);
