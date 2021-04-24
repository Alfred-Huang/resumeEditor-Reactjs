import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";


let modules = {}
let curInfoId = ""
let sectionId = ""
let infoId = ""
let information = {}
class BasicInfo extends Component {

    getName = ()=> {
        modules = this.props.modules
        modules.forEach((obj) =>{
            if(obj.module === "basicInfo"){
                 curInfoId = obj.id
            }
        })
         sectionId = this.props.experienceState.experiences[curInfoId].sectionId
         infoId  = this.props.experienceState.sections[sectionId].sectionList[0]
         information = this.props.experienceState.information[infoId]
        return information.name
    }

    getInfo = () => {
        let email = information.email
        let telephone = information.telephone
        let location = information.location
        let other = information.other
        let res = email + " | " + telephone + " | " + location
        return res
    }


    render() {

        return (
            <Fragment>
                <div >
                    <div style={{textAlign: "center", paddingTop: 30}}>
                        <div className="resume-name" >
                            {this.getName()}
                        </div>
                        <div className="resume-personal-info">
                            {this.getInfo()}
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
