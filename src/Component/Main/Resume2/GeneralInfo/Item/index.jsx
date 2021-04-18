import React, {Component, Fragment} from 'react';

class Item extends Component {
    render() {
        const {info} = this.props
        return (
            <Fragment>
                        <div  style={{marginBottom: 5 ,marginLeft: 30}}>
                            <div className="resume-content-title">
                                <div style={{display: "inline-block", width: 534}}>
                                    {info.project}
                                </div>
                                <div  style={{textAlign:"right",display: "inline-block", width: 200}}>
                                    Spring 2021 - Fall 2024
                                </div>
                            </div>
                            <p style={{marginBottom: 3}}>{info.role}</p>
                            <div>
                                <div >
                                    内容
                                </div>
                            </div>
                        </div>

            </Fragment>
        );
    }
}

export default Item;
