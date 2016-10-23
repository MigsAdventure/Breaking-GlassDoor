import React, { Component } from 'react';
import {  Button, Checkbox, Form, Input, Radio, Select, TextArea, Message, Progress, Size } from 'semantic-ui-react';
import Actions from "../actions/Actions";

const benefits = [
  { text: 'Paid Maternity Leave', value: 'maternity' },
  { text: 'Work From Home ', value: 'work-from-home' },
  { text: 'Mentor Program', value: 'mentor' },
  { text: 'Onsite ChildCare', value: 'childcare' },
]

export default class AddReview extends Component {

  constructor(props){
    super(props)
    this.state = {
      mssg:false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.increment = this.increment.bind(this)
  }

  handleSubmit(e, serializedForm){
    e.preventDefault()
    this.setState({
      mssg:true
    })
    Actions.addReview(serializedForm)
  }

  increment(percent){
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
    })
  }
  decrement(){
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
    })
  }

  render () {
    let {mssg} = this.state
    let Mssg = mssg ? (<Message positive floating><Message.Header>Review Added</Message.Header>
      <p>Please visit the detail page! </p></Message>) : (<Message floating><h3>Company Name</h3></Message>)
      return (
        <Form onSubmit={this.handleSubmit}>
          {Mssg}
          <Form.Group widths='equal'>
            <Form.Input label='Position' name='postion' placeholder='current position' />
            <Form.Select label='Benefits' name='benefits' options={benefits} placeholder='Search...' search multiple/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Select label='Size' name='Size' options={Size} placeholder='Gender' />
            <Form.Input label='Client Id' name='clientId' placeholder='Client Id' />
          </Form.Group>
          <Form.Input label='Image Link' name='image' placeholder='image url' />
          <Form.Group>
            <Button onClick={this.increment}>+</Button><Progress percent={this.state.percent} indicating /><Button onClick={this.increment}>+</Button>
          </Form.Group>
          <Form.TextArea name='details' label='Details' placeholder='Review...' rows='3' />
          <Button primary type='submit'>Submit Review</Button>
        </Form>
      )
    }
  }
