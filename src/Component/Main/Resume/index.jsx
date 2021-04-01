import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Divider, Layout, Row, Select} from "antd";
import {AppstoreOutlined, FileTextOutlined} from '@ant-design/icons';
import {Content, Header} from "antd/es/layout/layout";
import {ChromePicker} from 'react-color';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import "./index.css";


const heightScale = (1077.165 / 793.688);
const widthScale = (793.688 / 1903);
const fontScale = 22 / (1077.165 * 793.688);
class Resume extends Component {


    state = {
        height: 890.165,
        scale: 0.5,
    };



    componentDidMount() {
        window.addEventListener('resize', this.handleSize);
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.handleSize);
    }

    //handle the change of size of window

    handleSize = () =>{
        let newHeight, newScale;
        const  screenHeight = document.documentElement.clientHeight;
        newHeight = screenHeight;

        this.setState({height: newHeight })
    }

    // printDocument() {
    //     html2canvas(document.getElementById('resume1'), {
    //         allowTaint: true,
    //         taintTest: false,
    //         useCORS: true,
    //         dpi: window.devicePixelRatio * 4,
    //         scale: 4
    //     }).then(function (canvas) {
    //         let contentWidth = canvas.width
    //         let contentHeight = canvas.height
    //         let pageHeight = contentWidth / 592.28 * 841.89
    //         let leftHeight = contentHeight
    //         let position = 0
    //         let imgWidth = 592.28
    //         let imgHeight = 592.28 / contentWidth * contentHeight
    //         let pageData = canvas.toDataURL('image/jpeg', 1.0)
    //         let PDF = new jsPDF('', 'pt', 'a4')
    //         if (leftHeight < pageHeight) {
    //             PDF.addImage(pageData, 'JPEG', 1.2, 10, imgWidth, imgHeight)
    //         } else {
    //             while (leftHeight > 0) {
    //                 PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
    //                 leftHeight -= pageHeight
    //                 position -= 841.89
    //                 if (leftHeight > 0) {
    //                     PDF.addPage()
    //                 }
    //             }
    //         }
    //         PDF.save( "download.pdf")
    //     })
    // }
    // height: (this.state.height), width: (this.state.width)


    render() {
        return (
            <Fragment>
                   <Row span={24}>
                       <Col span={6}>
                           <Button onClick={this.printDocument}>print</Button>
                       </Col>
                       <Col span={7}>
                            asdasd
                       </Col>
                       <Col span={11}>
                           <Row  className="resume-board" style={{ height:this.state.height , width:793.688, transform: "scale(1)"}}>
                                <Card id="resume1" style={{background: "grey", height: 1031.811, width: 793.688}}>
                                    <Row>
                                        <Col style={{fontSize: this.state.font}}>asdasdasd</Col>
                                    </Row>
                                </Card>
                           </Row>
                       </Col>
                   </Row>
            </Fragment>
        );
    }
}


export default Resume;


// <Row className="background" >
//
//     <Col span={9} offset={3} >
//         <Row>
//             <Col>
//                 <Row>
//                     <Col>
//                         <Button type="primary" shape="circle" icon={<FileTextOutlined />}/>
//                         <Row>
//                             <Col>
//                                 <span>Layout</span>
//                             </Col>
//                         </Row>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <Button type="primary" shape="circle" icon={<AppstoreOutlined />}/>
//                         <Row>
//                             <Col>
//                                 <span>Model</span>
//                             </Col>
//                         </Row>
//                     </Col>
//
//                 </Row>
//             </Col>
//             <Col offset={1}>
//                 {/*Layout*/}
//                 <Card style={{ width: 220 }}>
//                     <Button type="primary" onClick={this.printDocument}>print</Button>
//                     <Layout>
//                         <Header>Layout</Header>
//                         <Content>
//                             <Row>
//                                 <Col>
//                                     <Button>Middle</Button>
//                                 </Col>
//                                 <Col offset={2}>
//                                     <Button>Left</Button>
//                                 </Col>
//                             </Row>
//                         </Content>
//                         <Header>Style</Header>
//                         <Content>
//                             <Row>
//                                 <Col>
//                                     <Button onClick={this.handleColorClick}>Color</Button>
//                                     {this.state.displayColor ?
//                                         <div style={ popover }>
//                                             <div style={cover} onClick={this.handleColorClickClose}/>
//                                             <ChromePicker disableAlpha  color={this.state.background}  onChange={this.handleColorChange}/>
//                                         </div>: null}
//                                 </Col>
//                             </Row>
//                         </Content>
//                         <Header>Font Size</Header>
//                         <Content>
//                             <Select defaultValue="10pt">
//                                 <Option value="10">10pt</Option>
//                                 <Option value="11">11pt</Option>
//                                 <Option value="12">12pt</Option>
//                             </Select>
//                         </Content>
//                         <Header>Font</Header>
//                         <Content>
//                             <Select defaultValue="xxx">
//                                 <Option value="xx">xxx</Option>
//                                 <Option value="xxx">xxx</Option>
//                                 <Option value="xxxx">xxx</Option>
//                             </Select>
//                         </Content>
//                         <Header>Line Spacing</Header>
//                         <Content>
//                             <Select defaultValue="xxx">
//                                 <Option value="xx">xxx</Option>
//                                 <Option value="xxx">xxx</Option>
//                                 <Option value="xxxx">xxx</Option>
//                             </Select>
//                         </Content>
//                     </Layout>
//                 </Card>
//
//             </Col>
//         </Row>
//     </Col>
//
//
//     <Col>
//         <Col className="resume-board" >
//             <Row className="resume-page " justify="center"  id="resume1">
//                 <Col className="resume-container">
//                     <Row className="resume-main">
//                         <Col span={24} className="resume-name">
//                             Zhicheng Huang
//                         </Col>
//                         <Col className="resume-personal-info">
//                             arvin5852i@gmail.com | (917)-582-0575 | Queens, NY 11358 | asjdasjkasdacsadasd
//                         </Col>
//                     </Row>
//                     <div style={{width: 50, marginLeft: 'auto', marginRight: 'auto', marginTop: 5, board: "#858484"}} className="resume-divider"/>
//                     <Row className="resume-section">
//                         <Col className="resume-section-title" span={24}>
//                             EDUCATION
//                         </Col>
//                         <Col span={24}>
//                             <div className="resume-divider"/>
//                         </Col>
//                         {/*用户写的东西*/}
//                         <Col span={24}>
//                             <Row className="resume-user-info">
//                                 <Col className="resume-section-content-title" span={18}>
//                                     Queens College, asdasdsadsassssssssssssssssssssdaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//                                 </Col>
//                                 <Col className="resume-section-content-time" span={6}>
//                                     Aug 2020 - Spt 2021
//                                 </Col>
//                                 <Col>
//                                     <div className="resume-user-content">
//                                         asdasdasdasasddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaa
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         {/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/}
//                         <Col span={24}>
//                             <Row className="resume-user-info">
//                                 <Col className="resume-section-content-title" span={18}>
//                                     Queens College, asdasdsadsassssssssssssssssssssdaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//                                 </Col>
//                                 <Col className="resume-section-content-time" span={6}>
//                                     Aug 2020 - Spt 2021
//                                 </Col>
//                                 <Col>
//                                     <div className="resume-user-content">
//                                         asdasdasdasasddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaa
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         {/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/}
//                         <Col span={24}>
//                             <Row className="resume-user-info">
//                                 <Col className="resume-section-content-title" span={18}>
//                                     Queens College, asdasdsadsassssssssssssssssssssdaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//                                 </Col>
//                                 <Col className="resume-section-content-time" span={6}>
//                                     Aug 2020 - Spt 2021
//                                 </Col>
//                                 <Col>
//                                     <div className="resume-user-content">
//                                         asdasdasdasasddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaa
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row> <Row className="resume-section">
//                     <Col className="resume-section-title" span={24}>
//                         EDUCATION
//                     </Col>
//                     <Col span={24}>
//                         <div className="resume-divider"/>
//                     </Col>
//                     {/*用户写的东西*/}
//                     <Col span={24}>
//                         <Row className="resume-user-info">
//                             <Col className="resume-section-content-title" span={18}>
//                                 Queens College, asdasdsadsassssssssssssssssssssdaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//                             </Col>
//                             <Col className="resume-section-content-time" span={6}>
//                                 Aug 2020 - Spt 2021
//                             </Col>
//                             <Col>
//                                 <div className="resume-user-content">
//                                     asdasdasdasasddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaa
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Col>
//                     {/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/}
//                     <Col span={24}>
//                         <Row className="resume-user-info">
//                             <Col className="resume-section-content-title" span={18}>
//                                 Queens College, asdasdsadsassssssssssssssssssssdaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//                             </Col>
//                             <Col className="resume-section-content-time" span={6}>
//                                 Aug 2020 - Spt 2021
//                             </Col>
//                             <Col>
//                                 <div className="resume-user-content">
//                                     asdasdasdasasddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaa
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Col>
//                     {/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/}
//                     <Col span={24}>
//                         <Row className="resume-user-info">
//                             <Col className="resume-section-content-title" span={18}>
//                                 Queens College, asdasdsadsassssssssssssssssssssdaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//                             </Col>
//                             <Col className="resume-section-content-time" span={6}>
//                                 Aug 2020 - Spt 2021
//                             </Col>
//                             <Col>
//                                 <div className="resume-user-content">
//                                     asdasdasdasasddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaa
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Col>
//                 </Row>
//
//
//
//
//                 </Col>
//             </Row>
//         </Col>
//     </Col>
//
// </Row>
