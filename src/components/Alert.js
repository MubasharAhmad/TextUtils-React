import React from 'react'

function Alert(props) {
    return (
        props.message &&
        <div className={`alert alert-${(props.message.type).toLowerCase()} alert-dismissible fade show`} role="alert">
            <strong>{props.message.type}</strong>: {props.message.msg}
        </div>
    )
}

export default Alert
