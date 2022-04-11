import {Component} from "react";
//验证setState 的同步异步
export default class TongbuYibu extends Component{
    state = {
        count: 1
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleClick}>addCount</button>
                <button onClick={this.handleClick2}>add2Count</button>
                <button onClick={this.handleClick3}>add3Count</button>
            </div>
        );
    }
    handleClick= () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
        //此处多个setState 进行了合并   实际只执行一个
    }

    handleClick3 = () => {
        this.setState({
            count: this.state.count + 1
        }, ()=> {
            console.log(this.state.count)
        })
        this.setState({
            count: this.state.count + 1
        }, ()=> {
            console.log(this.state.count)
        })
        this.setState({
            count: this.state.count + 1
        }, ()=> {
            console.log(this.state.count)
        })
    }

    handleClick2 = () => {
        //异步执行
        setTimeout(() =>{
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
        }, 0)
    //    不自持合并
    }
}
/*
官方不保持同步还是异步

add1
* setState 处在同步更新的逻辑中， 异步更新状态，更新真实dom
*
*ad2
* setState 处在异步的逻辑中，同步更新状态，同步更新真实dom

 add3
  setState 接受第二个参数，第二个参数是回调函数，状态和 dom 更新完后就会被触发
* */
