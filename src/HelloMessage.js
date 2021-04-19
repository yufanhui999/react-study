import React from 'react'

const HelloMessage = React.createClass({
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
})

export default HelloMessage;