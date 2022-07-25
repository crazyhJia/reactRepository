import {Component} from "react";
import propstype from "prop-types";

export default class Navbar extends Component{
    static propType =  {
        title: propstype.string,
        leftshow: propstype.bool
    };
    static defaultProps = {
        title: '',
        leftshow: true
    }
    render() {
        let {title, leftshow} = this.props;
        return (
            <div>
                {leftshow && <button>首页</button>}
                navbar-{title}
                <button>返回</button>
            </div>
        );
    }
}
