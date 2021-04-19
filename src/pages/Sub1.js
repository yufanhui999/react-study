import React, { Component, Fragment } from 'react'
import SubItem2 from './SubItem2'
import SubItem from './SubItem'

export default class Sub extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['1', '2', '3']
        }
    }

    handleInputChange(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleAdd() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }

    handleDelete(index) {
        const list = this.state.list;
        list.splice(index, 1)
        this.setState({
            list,
        })
    }

    render() {
        return (
            <Fragment>
                {/* 这样写注释 */}
                <div>
                    <input value={this.state.inputValue} onChange={(event) => this.handleInputChange(event)}/>
                    <button onClick={() => this.handleAdd()}> 增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return <SubItem2 
                                        key={item}
                                        content={item}
                                        index={index}
                                        deleteItem={this.handleDelete.bind(this)}>{item}</SubItem2>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}