import MainUI from "../../../Component/Main"
import {connect} from "react-redux";


function modules(state){
    return {modules: state}
}


const CountContainer = connect(modules)(MainUI)


export default CountContainer
