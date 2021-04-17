import React, {Component, Fragment} from 'react';
import {Button, Col, Row, Card} from "antd";
import {
    CloudDownloadOutlined,
    ControlOutlined,
    EditOutlined, PlusOutlined,
} from '@ant-design/icons';
import Education from "./Education"
import UserInfo from "./UserInfo"
import UserProfile from "./UserAction";
import Section from "./User/Section"
import PersonalInput from "./User/Input/PersonalInput";
import ProjectInput from "./User/Input/ProjectInput";
import EducationInput from "./User/Input/EducationInput";
import SummaryInput from "./User/Input/SummaryInput";
import CustomInput from "./User/Input/CustomInput";
import LeadershipInput from "./User/Input/LeadershipInput";
import ExperienceAction from "./User/ExpericenAction";
import {connect} from "react-redux";
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import "./index.css";


const resumeScale = 794 / 1920;
class Resume2 extends Component {
    state = {
        height: 895,
        width: 794,
        scale: 0.65,
        firstTime: true,
        inputNum: 1,
        sectionType: "default",
        currentSectionId: "",
    }
    //handle windows change
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () =>{
        let newScale, newWidth;
        const  screeWidth = document.documentElement.clientWidth;
        newWidth = screeWidth / 2;
        newScale =   resumeScale/ (794 / screeWidth);
        if(screeWidth > 1920){
            newScale = 1;
        }
        if(screeWidth < 1024){
            newScale = 0.65
        }
        this.setState({width: newWidth, scale: newScale, firstTime: false})
    }
    //when user click card chang to input
    showInputChange = (section, id)=>{
        this.setState({sectionType: section, currentSectionId: id})
        console.log(id)
    }

    //present the resume section
    handleResumeSection = (sectionName, id)=>{
       switch (sectionName) {
           case "education":
               return (
                   <Education key={id}/>
               )
           default:
               return (
                   <UserInfo key={id}/>
               )
       }
    }

    handleSection = () =>{

        switch (this.state.sectionType) {
            case "project":
                return (
                    <ProjectInput currentId={this.state.currentSectionId} showInputChange={this.showInputChange} />
                )
            case "education":
                return (
                    <EducationInput currentId={this.state.currentSectionId} showInputChange={this.showInputChange} />
                )
            case "personal":
                return (
                    <PersonalInput currentId={this.state.currentSectionId} showInputChange={this.showInputChange}/>
                )
            case "summary":
                return (
                    <SummaryInput currentId={this.state.currentSectionId} showInputChange={this.showInputChange}/>
                )
            case "leadership":
                return (
                    <LeadershipInput currentId={this.state.currentSectionId}  showInputChange={this.showInputChange}/>
                )
            case "custom":
                return (
                    <CustomInput currentId={this.state.currentSectionId} showInputChange={this.showInputChange}/>
                )
            default:
                return (
                        <Section showInputChange={this.showInputChange}/>
                )
        }

    }


    printDocument() {
        html2canvas(document.getElementById('resume'), {
            allowTaint: true,
            taintTest: false,
            useCORS: true,
            dpi: window.devicePixelRatio * 4,
            scale: 4
        }).then(function (canvas) {
            let contentWidth = canvas.width
            let contentHeight = canvas.height
            let pageHeight = contentWidth / 592.28 * 841.89
            let leftHeight = contentHeight
            let position = 0
            let imgWidth = 592.28
            let imgHeight = 592.28 / contentWidth * contentHeight
            let pageData = canvas.toDataURL('image/jpeg', 1.0)
            let PDF = new jsPDF('', 'pt', 'a4')
            if (leftHeight < pageHeight) {
                PDF.addImage(pageData, 'JPEG', 1.2, 1.4, imgWidth, imgHeight)
            } else {
                while (leftHeight > 0) {
                    PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                    leftHeight -= pageHeight
                    position -= 841.89
                    if (leftHeight > 0) {
                        PDF.addPage()
                    }
                }
            }
            PDF.save( "download.pdf")
        })
    }




    render() {
        return (
            <Fragment>
                <div style={{backgroundColor: "#E7E6E6", zIndex: 0}}>
                <Row >
                    <Col span={24}>
                        {/*left part*/}
                        <Row span={24} style={{marginTop: 30}}>
                            <Col span={3}>
                                <Button type="primary" onClick={this.printDocument}>print</Button>
                            </Col>
                            <Col span={9}>
                               <Row>
                                   <Col span={3}>
                                       <Row style={{marginBottom: 20}}>
                                         <Button type="primary" shape="circle" size="large" icon={<EditOutlined />}/>
                                       </Row>
                                       <Row style={{marginBottom: 20}}>
                                           <Button type="primary" shape="circle" size="large" icon={<ControlOutlined />}/>
                                       </Row>
                                       <Row style={{marginBottom: 20}}>
                                           <Button type="primary" shape="circle" size="large" icon={<CloudDownloadOutlined />}/>
                                       </Row>
                                   </Col>
                                   <Col span={21}>
                                       <Row>
                                           <Col span={22} style={{backgroundColor: "white"}}>
                                               {this.handleSection()}
                                           </Col>
                                       </Row>
                                   </Col>
                               </Row>
                            </Col>
                            {/*resume*/}
                            <div className="resume-board" style={{
                                height: window.innerHeight - 73,
                                width: this.state.firstTime === false ? this.state.width : (window.innerWidth / 2)}}
                            >
                                    <div style={{height:window.innerHeight - 73}}>

                                        <div className="dd"  id="resume"
                                             style={{
                                                 backgroundColor: "white",transformOrigin: "top left",
                                                 transform: [`scale(${this.state.firstTime === false ? this.state.scale : resumeScale / (794 / window.innerWidth)})`]}}
                                        >
                                            <div className="resume-spacing">
                                                <UserProfile/>
                                                {this.props.modulesObj.modules.map((moduleObj)=>{
                                                    return this.handleResumeSection(moduleObj.module, moduleObj.id)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
                </div>

            </Fragment>
        );
    }
}

export default connect(state => ({modulesObj: state.moduleReducer}), null)(Resume2)
