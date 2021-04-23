import React, {Component, Fragment} from 'react';

class Item extends Component {

    render() {
        const {information} = this.props
        const HTMLContent = information.HTMLContent
        return (
            <Fragment>
                        <div  style={{marginBottom: 5 ,marginLeft: 30}}>
                            <div className="resume-content-title">
                                <div style={{display: "inline-block", width: 534}}>
                                    {information.project}
                                </div>
                                <div  style={{textAlign:"right",display: "inline-block", width: 200}}>
                                    Spring 2021 - Fall 2024
                                </div>
                            </div>
                            <p style={{marginBottom: 3, width: 534, display: "inline-block"}}>{information.role}</p>
                            <p style={{textAlign:"right", width: 200,marginBottom: 3, display: "inline-block"}}>{information.location}</p>
                            <div style={{lineHeight: 0.9, marginRight: 52, marginLeft: 5}}>
                                <div  dangerouslySetInnerHTML={{__html: HTMLContent}}>
                                </div>
                            </div>
                        </div>
            </Fragment>
        );
    }
}

export default Item;
