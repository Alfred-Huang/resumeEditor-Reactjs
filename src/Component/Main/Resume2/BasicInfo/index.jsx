import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";


let sectionId = ""
let infoId = ""
let information = {}
class BasicInfo extends Component {

    getName = ()=> {
         sectionId = this.props.experienceState.experiences[this.props.moduleId].sectionId
         infoId  = this.props.experienceState.sections[sectionId].infoIdList[0]
         information = this.props.experienceState.information[infoId]
        return information.name
    }

    getInfo = () => {
        let email = information.email
        let telephone = information.telephone
        let location = information.personalLocation
        return email + " | " + telephone + " | " + location
    }

    getOther =() =>{
        return information.other
    }


    render() {

        return (
            <Fragment>
                <div>
                    <div style={{textAlign: "center", paddingTop: 35, fontFamily: "Helvetica, sans-serif"}}>
                        <div className="resume-name" >
                            {this.getName()}
                        </div>
                        <div className="resume-personal-info" >
                            <p>{this.getInfo()}</p>
                            <p>{this.getOther()}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect(
    state => ({experienceState: state.experienceInfoReducer})
)(BasicInfo);
