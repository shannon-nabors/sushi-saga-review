import React, { Fragment } from 'react'
import Form from '../components/Form'

class Table extends React.Component {

  defaultState = () => {
    return { form: false, money: "" }
  }
  
  state = this.defaultState()


  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  toggleForm = () => {
    let form = this.state.form
    this.setState({form: !form})
  }

  handleChange = (e) => {
    this.setState({money: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMoney(parseInt(this.state.money))
    this.setState(this.defaultState())
  }

  render() {
    return (
      <Fragment>
        <div className="remaining">
          <h1>
            You have: ${ this.props.balance } remaining!
          </h1>
          <button onClick={this.toggleForm}>Add Money</button>
        </div>
        <div className="money-form">
          {this.state.form ? <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> : null}
        </div>
        <div className="table">
          <div className="stack">
            { this.renderPlates(this.props.plates) }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Table