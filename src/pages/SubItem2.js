import React, { Component } from 'react';

/*
    父子之间的通信全部都是通过 props 完成的， 父组件向子组件传递消息是通过 props, 子组件调用父组件的方法。
*/

class SubItem2 extends Component {
    constructor(props) {
        super(props)
    }

    handleSubItemClick() {
        this.props.deleteItem(this.props.index)
    }
    render() { 
        return ( 
            <div onClick={this.handleSubItemClick.bind(this)}>
                { this.props.content }
            </div>
         );
    }
}
 
export default SubItem2;