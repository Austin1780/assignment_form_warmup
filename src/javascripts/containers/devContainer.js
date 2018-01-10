import React, {Component} from 'react'
import ControlledForm from '../components/ControlledForm'
import {validateForm} from '../helpers'
import serialize from 'form-serialize'
import SerializedForm from '../components/SerializedForm'


class ControlledFormContainer extends Component {
  constructor() {
    super()
    this.state = {
      success: false,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: '',
    }
  }





  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = serialize(form, {hash: true})
    const errors = validateForm(data)

    if (errors) {
      this.setState({errors})
    } else {
      console.log(data)
      this.formSuccess(form)
    }
  }
  
  formSuccess = () => {
    this.setState({
      success: true,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: '',
    }, () => console.log('Success!'))
  }

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        {...this.state}
      />
    )
  }
}

export default ControlledFormContainer
