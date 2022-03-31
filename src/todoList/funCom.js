//函数组件    16.8之前也叫做无状态组件
import ClassCom from "./classCom";

const Tabbar = () => {return <div>Tabbar</div>}

//组件的嵌套

function funCom() {
    return <div>函数组件
        {/*第一个大括号表示我们要在jsx中插入js了，第二个大括号是对象的括号*/}
        <div style={{color: 'red', border: '1px solid pink'}}>sdsd   设置了行内样式   </div>
        <ClassCom/>
        <Tabbar/>
    </div>
}
export default funCom
