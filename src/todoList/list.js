import React,{Component} from "react";
class List extends Component {
    render() {
        return <div>
            <input />
            <button onClick={()=> this.clickAdd()}>add</button>
        </div>
    }
}

export default List;
