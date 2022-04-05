import {Component} from "react";

export default class app extends Component {
    state = {
        list: ['收藏','w','w332','2fdsf'],
        olList: [
            {name: 'aaa', id: 1},
            {name: 'bbb', id: 2},
            {name: 'ccc', id: 3}
            ]
    }
    render() {
        var list = this.state.list.map(item =>
            <li>{item}</li>
        )
        return (
            <div>
                列表循环渲染，react的高效依赖于所谓的virtual-dom，尽量不要碰 dom
                key必须唯一，是每个元素唯一的标识，且为数字，并不能为字符串
            {/* map   */}
                <ul>
                    {
                        this.state.olList.map( item =>
                            <li key={item.id}>{item.name}</li>
                        )
                    }
                </ul>
                <ol>
                    {
                        this.state.olList.map(  (item, index) =>
                            <li key={item.id}>{item.name} - {index}</li>
                        )
                    }
                </ol>
                <ol>
                    {list}
                </ol>
            </div>
        );
    }
}
