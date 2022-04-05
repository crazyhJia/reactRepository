import "./cssFile.css"  //webpack的支持
import React from "react";
class UseCss extends React.Component{
    render() {
        let name = 'rose';
        let nameStyle = {
            color: 'yellow',
            fontSize: '14px',
            background: 'lightblue'
        }
        //为什么return用（）包裹呢？ 没记住

        return (
            <div className='contentWrapper'>
                {20+30}+{name}
                <br/>
                <div style={nameStyle}>{name}</div>
                {20 > 30 ? 'aa' : 'bb'}
                <p>组建的样式应用</p>
                <div className='title'>我的字体是蓝色的，大小18px</div>
                <div className='item'>我的字体是红色的，大小14px</div>
                {/*react 官方文档推荐行内样式，react 觉得每个组件都是一个独立的整体*/}
                <div style={{color: 'red', border: '1px solid pink'}}>sdsd   设置了行内样式   </div>

                {/*for 的写法 */}
                <label htmlFor='username'>用户名：</label>
                <input type="text" id='username'/>
        </div>)
    }
}
export default UseCss;
