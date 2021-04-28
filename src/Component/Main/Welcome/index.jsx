import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Layout, Row} from "antd";
import './config'
import axios from "axios";

import "./index.css";

class Welcome extends Component {

    componentDidMount() {
        let api = global.AppConfig. serverIP + "/hello"
        let param = {
            modules: [
                {id: "Jhka8as0IUHKJHASD89hj", module: "basicInfo"},
                {id: "lgCeTDkAvYlDobUgwfBQN", module: "education"},
                {id: "JVPGlab2QGb7TLXXl8pgw", module: "project"},
            ],
            experiences: {
                "lgCeTDkAvYlDobUgwfBQN": {id:  "lgCeTDkAvYlDobUgwfBQN", module: "education", title: "education", sectionId: "1"},
                "JVPGlab2QGb7TLXXl8pgw": {id: "JVPGlab2QGb7TLXXl8pgw", module: "project", title: "project", sectionId:"2"},
                "Jhka8as0IUHKJHASD89hj": {id: "Jhka8as0IUHKJHASD89hj", module: "basicInfo", title: "basic Info", sectionId: "3"}
            },
            sections: {
                "1": {sectionId: "1", sectionList: ["1", "2", "3"]},
                "2": {sectionId: "2", sectionList: ["4", "5", "6"]},
                "3": {sectionId: "3", sectionList: ["7"]},
            },
            information: {
                "1": {infoId: "1", project: "qianghua", role: "B.A. CS", location: "Flushing",
                    startDate:"06-2024", endDate: "06-2025",
                    HTMLContent: "", RAWContent: {}
                },

                "2": {infoId: "2", project: "beida", role: "B.A. CS", location: "Flushing",
                    startDate:"06-2024", endDate: "06-2025",
                    HTMLContent: "", RAWContent: {}
                },

                "3": {infoId: "3", project: "qianghua", role: "B.A. CS", location: "Flushing",
                    startDate:"06-2024", endDate: "06-2025",
                    HTMLContent: "", RAWContent: {}
                },

                "4": {infoId: "4", project: "buzhidao", role: "manager", location: "flushing",
                    startDate:"06-2024", endDate: "06-2025",
                    HTMLContent: "", RAWContent: {}
                },

                "5": {infoId: "5", project: "diaonima", role: "manager", location: "flushing",
                    startDate:"06-2024", endDate: "06-2025",
                    HTMLContent: "", RAWContent: {}
                },

                "6": {infoId: "6", project: "caonima", role: "manager", location: "flushing",
                    startDate:"06-2024", endDate: "06-2025",
                    HTMLContent: "", RAWContent: {}
                },
                "7": {infoId: "7", name: "Zhicheng Huang", telephone: "218763812", email: "asdasdjgh@gmail.com", location: "New York", other: ""}

            }

        }
    axios.post(api, param)

      .then((response)=> {

                // handle success

                console.log(response.data);

        let tempData = response.data

        this.setState({

          welcome_list:tempData

        })

              })

      .catch(function (error) {

                // handle error

                console.log(error);

      })

    }

    render() {
        return (
            <Fragment>
                <Row justify="center">
                    <Col>
                        <Link to="/identity">
                            <Button className="start-button" type="primary" >Build</Button>
                        </Link>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}
export default Welcome;
