import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange}></input>
            <input type="submit"></input>
        </form>
    )
}

export default Form