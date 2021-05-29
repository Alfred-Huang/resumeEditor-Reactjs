import React, {Component, Fragment} from 'react';

class Item extends Component {

    getTime = () =>{
        let startDate = this.props.information.startDate
        let endDate = this.props.information.endDate
        if(startDate === "" && endDate === ""){
            return null
        }
        return startDate + " - " + endDate
    }

    render() {
        const {information} = this.props
        const HTMLContent = information.HTMLContent
        return (
            <Fragment>
                        <div  style={{marginBottom: 3 ,marginLeft: 40}}>
                            <div className="resume-content-title">
                                <div style={{display: "inline-block", width: 524, fontWeight: 600,  fontSize: 15}}>
                                    {information.project}
                                </div>
                                <div  style={{textAlign:"right",display: "inline-block", fontStyle: "italic",width: 190}}>
                                    {this.getTime()}
                                </div>
                            </div>
                            <p style={{marginBottom: 3, fontStyle: "italic", width: 524, fontSize: 13,display: "inline-block"}}>{information.role}</p>
                            <p style={{textAlign:"right", fontStyle: "italic", width: 190,marginBottom: 3, display: "inline-block"}}>{information.personalLocation}</p>
                            <div style={{lineHeight: 0.7, marginRight: 40, marginLeft: 5,  whiteSpace: "pre-wrap", wordWrap: "break-word"}}>
                                <div  dangerouslySetInnerHTML={{__html: HTMLContent}}>
                                </div>
                            </div>
                        </div>
            </Fragment>
        );
    }
}

export default Item;
