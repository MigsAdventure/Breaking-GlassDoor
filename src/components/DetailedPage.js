import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { List,Item, Image, Label, Icon, Card,Grid,Button,Modal,Dropdown, Progress, Header, Comment} from 'semantic-ui-react'
import DataStore from '../stores/DataStore';
import Actions from '../actions/Actions';
import CircularProgressbar from 'react-circular-progressbar';
import AddReview from './AddReview';

export default class DetailedPage extends Component {

  render() {
    return (
      <Grid textAlign='center'>
        <Grid.Row><Icon name = "amazon" /><h2>Company Name</h2></Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <CircularProgressbar percentage={90} />
          </Grid.Column>
          <Grid.Column width={12}>
            <h5>Support</h5><Progress className='progBar' percent={85} color='blue' active/>
            <h5>Advancement</h5><Progress className='progBar' percent={38} color='violet' active/>
            <h5>Salary</h5><Progress className='progBar' percent={47} color='purple' active/>
            <h5>Blablabla</h5><Progress className='progBar' percent={29} color='red' active/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Comment.Group>
            <Header as='h3' dividing>Reviews</Header>

            <Comment>
              <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!
                  <p>thumbs outline up</p></Comment.Text>

                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Elliot Fu</Comment.Author>
                <Comment.Metadata>
                  <div>Yesterday at 12:30AM</div>
                </Comment.Metadata>
                <Comment.Text>
                  <p>This has been very useful for my research. Thanks as well!</p>
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>

        </Grid.Row>
        <Modal dimmer='blurring' open={open} onClose={this.close}>
          <Modal.Header>Edit</Modal.Header>
          <Modal.Content>
            <AddReview id= {1}/>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.close}>
              Go Back
            </Button>
          </Modal.Actions>
        </Modal>
        </Grid>
      )
    }
  }
