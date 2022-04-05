import React,{Component} from "react";
export default class List extends Component {
    myref = React.createRef();
    constructor() {
        super();
        this.state = {
            list: [{
                id: 1,
                text:'123'
            }],
            list222: [{
                id: 1,
                text:'aaa'
            }]
        }
    }
    // 两种定义 state 方式不能共存
    // state = {
    //     list222: [{
    //         id: 1,
    //         text:'123'
    //     }]
    // };

    render() {
        return (<div>
            <input ref={this.myref}/>
            <button onClick={() => this.clickAdd()}>add</button>
            <ol>
                {
                    this.state.list.map( (item, index) =>
                        <li key={item.id}>
                            {item.text}
                            {<button onClick={ () => {
                                this.clickDelete(index)
                            }}>delete</button>}
                        </li>
                    )
                }
            </ol>
            {this.state.list.length ===0 ? <div>暂无数据了。。。</div> : null}
            <ul>
                {
                    this.state.list222.map((item, index) =>
                        <li key={item.id}>
                            {item.text}
                            {
                                <button onClick={ () => {
                                    this.clickDelete222(index)
                                }}>delete</button>
                            }
                            </li>
                    )
                }
            </ul>
            {this.state.list222.length ===0 && <div>啊！暂无数据了。。。</div> }
        </div>)
    }

    clickAdd = () => {
        console.log('click', this.myref.current.value)
        //不要直接修改状态  下面这种不推荐
        // this.state.list.push(
        //     {
        //         id: Math.random() * 100,
        //         value: this.myref.current.value
        //     }
        // )

        // var temp = this.state.list; //引用赋值  复杂类型赋值会有问题
        // var temp = this.state.list.slice(); //  深拷贝
        let temp = [...this.state.list]; //
        let temp222 = [...this.state.list222]; //
        temp.push(
            {
                id: Math.random() * 100,
                text: this.myref.current.value
            }
        )
        temp222.push(
            {
                id: Math.random() * 100,
                text: this.myref.current.value
            }
        )
        this.setState({list: temp, list222: temp222})
        this.myref.current.value = '' //清空输入框
    }
    clickDelete(index){
        console.log(index)
        let temp = [...this.state.list]; //
        temp.splice(index, 1)
        this.setState({list: temp})
    }
    clickDelete222(index) {
        console.log(index)
        let temp = this.state.list222.slice(); //
        temp.splice(index, 1)
        this.setState({list222: temp})
    }
}
