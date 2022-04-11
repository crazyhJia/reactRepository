import {Component} from "react";
import BetterScroll from 'better-scroll'
export default class Scroll extends Component{
    state = {
        list: []
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.getData()
                }}>click</button>
                <div className='scrollWrapper' style={{height:'200px', width: '200px' ,background: 'green', overflow: 'hidden'}}>
                    <ol className='content'>
                        {
                            this.state.list.map(item =>
                                <li key={item}>{item}</li>
                            )
                        }
                    </ol>
                </div>
            </div>
        );
    }
    getData() {
        let list2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        // this.setState({
        //     list: list2
        // },() => {
        //     //dom 更新完了
        //     console.log(this.state.list)
        //     console.log(document.querySelectorAll('li'))
        //     new BetterScroll('.scrollWrapper')
        //
        // })

        setTimeout(()=> {
            this.setState({
                list: list2
            })

            //dom 更新完了
            console.log(this.state.list)
            console.log(document.querySelectorAll('li'))
            new BetterScroll('.scrollWrapper')

        }, 0)
    }
}
