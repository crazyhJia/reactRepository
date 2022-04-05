import React, {Component} from 'react';

// 怎么拿到输入框的值呢
export default class RefUse extends Component {
    myref = React.createRef();
    render() {
        return (
            <div>
                {/*<input ref='myvalue'/>*/}
                {/*<button onClick={() => {*/}
                {/*    //处理逻辑多  不推荐*/}
                {/*    console.log('ref', this.refs.myvalue.value)*/}
                {/*}}>add</button>*/}

                <input ref={this.myref}/>
                <button onClick={() => {
                    this.handleClick()
                }}>btn</button>
               </div>
        )
    }
    handleClick= () => {
        console.log('btn', this.myref.current.value)
    }
}
