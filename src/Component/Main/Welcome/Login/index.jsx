import React, {Component, Fragment} from 'react';
import GoogleLogin from "react-google-login";
import { withRouter } from 'react-router-dom';
import axios from "axios";



class Login extends Component {

    state = {
        username: "",
        id: "",
        image: ""
    }

    componentDidMount() {
        let a = [];
        const b = ["1", "2", "3"];
        a = b
        console.log(a)
    }


    login = (res) =>{
        const userInfo = {
            username: res.profileObj.name,
            email: res.profileObj.email,
            id: res.googleId,
            Image: res.profileObj.imageUrl,
        }
        let api = global.AppConfig. serverIP + "/login"
        axios.post(api, userInfo)
            .then((result)=>{
                if(result.status === 200){
                    sessionStorage.setItem("user_token", res.profileObj.googleId)
                    sessionStorage.setItem("resume_list",result.data)
                    sessionStorage.setItem("image", res.profileObj.imageUrl)
                    sessionStorage.setItem("name", res.profileObj.name)
                    this.props.history.push('/main');
                }else{

                }
            })



    }

    failLogin = (res) =>{
        return null
    }


    render() {

        const success = (response) => {
            this.login(response)
        }

        const fail = (response) =>{
            this.failLogin(response)
        }

        return (
            <Fragment>

                    <GoogleLogin
                        clientId="912081708712-purr3f1tip73t4t0ag0eudriurn68ed2.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={success}
                        onFailure={fail}
                        cookiePolicy={'single_host_origin'}
                    />

            </Fragment>
        );
    }
}

export default withRouter(Login);
