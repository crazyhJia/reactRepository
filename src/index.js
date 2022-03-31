import React from 'react';
import ReactDom from 'react-dom'

import FunCom from'./todoList/funCom'
import ClassCom from'./todoList/classCom'
import List from'./todoList/list'
import UseCss from'./todoList/useCss'

ReactDom.render(<div>
    <ClassCom/>
    <FunCom/>
    <List></List>
    <UseCss></UseCss>
</div>, document.getElementById('root'))


// ReactDom.render(    <div>
//         11111
//     </div>
//     , document.getElementById('root'))

// ReactDom.render(React.createElement('div',{
//     className: 'divss',
//     id: 'divId'
// },'sa'), document.getElementById('root'))
