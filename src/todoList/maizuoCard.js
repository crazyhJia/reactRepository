import React, {Component} from "react";
import './cssFile.css'
import Film from "../maizuo/film";
import Cinema from "../maizuo/cinema";
import Center from "../maizuo/center";
export default class MaizuoCard extends Component{
    state = {
        list: [
            { id: 1, text: '热门'},
            { id: 2, text: '推荐'},
            { id: 3, text: '我的'}
        ],
        current: 0
    }
    render() {
        return (
            <div className='maizuo'>
                {/*{this.state.current == 0 && <Film></Film>}*/}
                {/*{this.state.current == 1 && <Cinema></Cinema>}*/}
                {/*{this.state.current == 2 && <Center></Center>}*/}
                {
                    //表达式   支持函数表达式
                    this.switchPage()
                }
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}
                                className={this.state.current === index ? 'active': ''}
                                onClick={() =>
                                    this.handleClick(index)
                                    }>{item.text}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
    handleClick(index) {
        console.log(index)
        this.setState({
            current: index
        }
        )
    }
    switchPage() {
        switch (this.state.current) {
            case 0:
                return <Film></Film>;
            case 1:
                return <Cinema></Cinema>;
            case 2:
                return <Center></Center>;
            default:
                return null;
        }
    }
}

