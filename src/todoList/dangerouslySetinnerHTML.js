import React, {Component} from "react";

export default class app extends Component{
    myref = React.createRef()
    state = {
        list: [{
            id: 1,
            text:'123'
        }]
    };
    render() {
        return (
            <div>
                <input ref={this.myref}/>
                <button onClick={() => this.clickAdd()}>add</button>
                <ol>
                    {
                        this.state.list.map( (item, index) =>
                            <li key={item.id}>
                                {/*{item.text}*/}
                                {/* 富文本数据展示  用法  dangerouslySetInnerHTML 针对危险脚本代码的安全性*/}
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: item.text
                                    }
                                }></span>
                            </li>
                        )
                    }
                </ol>
            </div>
        );
    }
    clickAdd = () => {
        console.log('click', this.myref.current.value)
        let temp = [...this.state.list]; //
        temp.push(
            {
                id: Math.random() * 100,
                text: this.myref.current.value
            }
        )
        this.setState({list: temp})
        this.myref.current.value = '' //清空输入框
    }
}
