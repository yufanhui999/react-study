import React, { Component } from 'react'

class SubItem extends Component {
    constructor(props) {
        super(props)
    }

    handleClick() {
        this.props.deleteItem(this.props.index)
    }
  
    render() { 
        return ( 
            <div onClick={this.handleClick.bind(this)}>
                { this.props.content }
            </div>
         );
    }
}
 
export default SubItem;