import {Component}  from 'react'

 const SubComponent = (props) => {
    return (
        <div>
            { props.title }
            <button onClick={(msg) => props.callback(msg)}>click me</button>
        </div>
    )
}

export default SubComponent;