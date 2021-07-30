import React, {Component, Fragment} from 'react';
// import GoogleLogin from "react-google-login";
import { withRouter } from 'react-router-dom';
import {notification, Form, Input, Button, Card} from 'antd';
import axios from "axios";



class Login extends Component {

    state = {
        username: "",
        id: "",
        image: ""
    }

    componentDidMount() {
        if(sessionStorage.getItem("user_token") !== null){
            this.props.history.push('/main');
        }
    }

    openNotificationWithIcon = type => {
        notification[type]({
            message: 'Fail to login',
            description:
                'Please try later',
        });
    };

    // login = (res) =>{
    //     const userInfo = {
    //         username: res.profileObj.name,
    //         email: res.profileObj.email,
    //         id: res.googleId,
    //         Image: res.profileObj.imageUrl,
    //     }
    //
    //     let api = global.AppConfig. serverIP + "/login"
    //     axios.post(api, userInfo)
    //         .then((result)=>{
    //                 sessionStorage.setItem("user_token", res.profileObj.googleId)
    //                 sessionStorage.setItem("resume_list",result.data)
    //                 sessionStorage.setItem("image", res.profileObj.imageUrl)
    //                 sessionStorage.setItem("name", res.profileObj.name)
    //                 this.props.history.push('/main');
    //         }).catch(()=>{
    //         this.openNotificationWithIcon("error")
    //     })
    // }

    // failLogin = (res) =>{
    //     window.alert("Google API ERROR")
    // }

    onFinish = (value) =>{
        sessionStorage.setItem("user_token", "123")
                        sessionStorage.setItem("name", "User")
        this.props.history.push('/main');
    }


    render() {

        // const success = (response) => {
        //     this.login(response)
        // }
        //
        // const fail = (response) =>{
        //     this.failLogin(response)
        // }

        return (
            <Fragment>
                {/*<div style={{marginTop: 300}}>*/}
                    {/*<GoogleLogin*/}
                    {/*    clientId="912081708712-purr3f1tip73t4t0ag0eudriurn68ed2.apps.googleusercontent.com"*/}
                    {/*    buttonText="Login"*/}
                    {/*    onSuccess={success}*/}
                    {/*    onFailure={fail}*/}
                    {/*    cookiePolicy={'single_host_origin'}*/}
                    {/*/>*/}

                {/*</div>*/}
                <div style={{marginTop: 300}}>
                    <Card>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Login);
