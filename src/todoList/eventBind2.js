import React, {Component} from 'react';
export default class APP2 extends Component {
    a = 12;
    render() {
        return (
           <div>
            <input/>
            <button onClick={() => {
                //处理逻辑多  不推荐
                console.log('add', this.a)
            }}>add</button>
            <button onClick={this.handleClick }>add2</button>
            {/*   bind 进行this 修正   不推荐 */}
            <button onClick={this.handleClick.bind(this) }>add3</button>
            {/*推荐*/}
            <button onClick={this.handleClick4 }>add4</button>
               {/*推荐  方便传参*/}
            <button onClick={ ()=> this.handleClick5()}>add5</button>
           </div>
        )
    }
    handleClick() {
        //此处this 指向unddefined
        // 此时的this是被react的事件系统调用的  并未指向 类 app2  所以就丢了
        //在此处调用的就指向undefined
        console.log('add2', this.a)
    }
    //箭头函数的this指向调用它的
    handleClick4=(event)=>  {
        console.log('add4', this.a, event.target)
    }
    handleClick5= () => {
        console.log('add5', this.a)
    }
 }
 /*
 * 改变this 指向的三种方法
 * call   改变 this  自动执行函数
 * apply  改变 this  自动执行函数
 * bind   改变 this  不会自动执行，需要手动加（）执行函数
 * */
 var obj1 = {
     name: 'obj1',
     getName() {
         console.log(this.name)
     }
 }
 var obj2 = {
     name: 'obj2',
     getName() {
         console.log(this.name)
     }
 }
// obj1.getName();
// obj2.getName();
//
// obj1.getName.call(obj2);
// obj1.getName.apply(obj2);
// obj1.getName.bind(obj2)();
