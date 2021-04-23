import React, {Component, Fragment} from 'react';
import 'braft-editor/dist/output.css'
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
                            <p style={{marginBottom: 3}}>{information.role}</p>
                            <div>
                                <div className="braft-output-content"  dangerouslySetInnerHTML={{__html: HTMLContent}}>

                                </div>
                            </div>
                        </div>
            </Fragment>
        );
    }
}

export default Item;
