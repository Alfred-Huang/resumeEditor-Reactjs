import React, {Component, Fragment} from 'react';
import {Row, Col, Button,} from "antd";
import {PlusOutlined} from "@ant-design/icons";
class ButtonList extends Component {
    render() {
        const {buttonTitle, handleAddModule} = this.props
        return (
            <Fragment>

                    <Col span={8} style={{textAlign: "center"}}>
                        <Button onClick={(e)=>{handleAddModule(buttonTitle)}}
                                type="primary"
                                size={"small"}
                                style={{marginLeft: 10, width: 105}}
                        >
                            {buttonTitle}
                        </Button>
                    </Col>

            </Fragment>
        );
    }
}

export default ButtonList;
