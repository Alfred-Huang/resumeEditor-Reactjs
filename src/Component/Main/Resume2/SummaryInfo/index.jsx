import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Item from "./Item";



class SummaryInfo extends Component {

    getItem = () =>{
        const id = this.props.moduleId
        const sectionId = this.props.experienceState.experiences[id].sectionId
        const infoId = this.props.experienceState.sections[sectionId].infoIdList[0]
        const htmlContent = this.props.experienceState.information[infoId].HTMLContent
        return <Item HTMLContent={htmlContent}/>
    }

    render() {
        const title = this.props.experienceState.experiences[this.props.moduleId].title
        return (
            <Fragment>
                <div>
                    <div className="resume-section">
                        <div className="resume-section-title" style={{marginLeft: 40}}>
                            {title}
                        </div>
                        <div >
                            <div className="resume-divider"/>
                        </div>
                        <div>
                            {this.getItem()}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default  connect(
    state => ({experienceState: state.experienceInfoReducer})
)(SummaryInfo);
