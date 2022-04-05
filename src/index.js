import React from 'react';
import ReactDom from 'react-dom'

import FunCom from'./todoList/funCom'
import ClassCom from'./todoList/classCom'
import List from'./todoList/list'
import UseCss from'./todoList/useCss'
import EventBind from'./todoList/eventBind'
import EventBind2 from'./todoList/eventBind2'
import Ref from'./todoList/ref'
import StateClass from'./todoList/stateClass'
import ListRender from'./todoList/listRender'
import DangerouslySetinnerHTML from'./todoList/dangerouslySetinnerHTML'

ReactDom.render(
    // 严格模式
    <React.StrictMode>
        <div>
        {/*<ClassCom/>*/}
        {/*<FunCom/>*/}
        {/*<UseCss></UseCss>*/}
        {/*<EventBind></EventBind>*/}
        {/*<EventBind2></EventBind2>*/}
        {/*<Ref></Ref>*/}
        {/*<StateClass></StateClass>*/}
        {/*<ListRender></ListRender>*/}
        {/*<List></List>*/}
        <DangerouslySetinnerHTML></DangerouslySetinnerHTML>
        </div>
    </React.StrictMode>
    , document.getElementById('root'))


// ReactDom.render(    <div>
//         11111
//     </div>
//     , document.getElementById('root'))

// ReactDom.render(React.createElement('div',{
//     className: 'divss',
//     id: 'divId'
// },'sa'), document.getElementById('root'))
