import {Component} from "react";
import Navbar from "../navbar/navbar";

export default class Propss extends Component{
    render() {
        return (
            <div>
                <div>
                    <Navbar title='首页' leftshow={true}></Navbar>
                </div>
                <div>
                    <Navbar title='列表' leftshow={false}></Navbar>
                </div>
                <div>
                    <Navbar title='我的左侧按钮默认显示'></Navbar>
                </div>
            </div>
        );
    }
}
