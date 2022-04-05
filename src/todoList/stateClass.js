import {Component} from "react";

export default class stateClass extends Component{
    //状态  关键字 state  第一种定义方法
    // state = {
    //     text: '收藏',
    //     showText: true
    // }

    constructor() {
        super();  //必加方法
        this.state = {   //第二种方法
            text: '收藏',
            showText: true,
            name: 'lily'
        }
    }

    render() {
        return (
            <div>
                <h1>state的初体验</h1>
                <div>{this.state.name}</div>
                <button onClick={() => {
                    // this.state.text = '取消收藏'  //这样不能直接修改状态
                    this.setState({
                        showText: !this.state.showText,
                        name: 'rose',
                    })
                    if(this.state.showText) {
                        console.log('收藏')
                    } else {
                        console.log('取消收藏')
                    }
                }}>{this.state.showText ? '收藏' : '取消收藏'}</button>
            </div>
        )
    }
}
