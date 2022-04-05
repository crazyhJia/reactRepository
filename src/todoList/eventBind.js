import react, {Component} from 'react'

export default class App extends Component{
    render() {
        return (
            <div>
                <input/>
                <button onClick={() => {
                    //处理逻辑过多，不推荐这种写法
                    console.log('add')
                }}>add
                </button>
                {/*这里加了（）小括号，浏览器回自动执行一次，
                之后点击就不再执行了，所以不能这么直接加小括号*/}
                <button onClick={this.handleClick() }>add2</button>
                <button onClick={this.handleClick3 }>add3</button>
                <button onClick={this.handleClick4 }>add4</button>
                <button onClick={() => {
                    //这种匿名写法   调用3、4 都可以    比较推荐这种写法
                    this.handleClick3()
                    this.handleClick4()
                }}>add5</button>
            </div>
        )
    }
    handleClick () {
        console.log('add2')
    }
    handleClick3 () {
        console.log('add3')
    }
    handleClick4 = () => {
        console.log('add4')
    }
}
