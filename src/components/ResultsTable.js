import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { List,Item, Image, Label, Icon, Card, Grid, Button, Modal, Segment, Statistic } from 'semantic-ui-react'
import CircularProgressbar from 'react-circular-progressbar'
import DataStore from '../stores/DataStore'
import Actions from '../actions/Actions'


export default class resultsTable extends Component {
  constructor() {
    super();
    this.state={
      companies: DataStore.getCompanies(),
    }
    this._onChange = this._onChange.bind(this);
    this.select = this.select.bind(this);
  }

  componentWillMount () {
    DataStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    DataStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ companies: DataStore.getCompanies() });
  }

  select(company) {
      Actions.setScores(company);
      browserHistory.push(`/detail`);
  }


  render() {
    let { companies } = this.state;
    console.log('companies: ', companies);
    // let  Companies = companies.map( company => {
    //     let { name, id, logo, review, score, description } = company;
    //     let Companies = (
    //         <Card onClick={() => this.select(1)} className='card'>
    //           <Card.Content>
    //             <div>
    //               <div>
    //                 <Image size='mini' src='./logo1.png' />
    //               </div>
    //               <Card.Header>
    //                 Company Name
    //               </Card.Header>
    //             </div>
    //             <Card.Meta>
    //               Description: From next-generation networks to industry-leading mobility, cloud, and video, Cisco provides integrated architecture and software solutions, connecting people, processes, companies, and things.
    //             </Card.Meta>
    //             <Card.Description>
    //               Reviews : "Great place to work!"
    //             </Card.Description>
    //           </Card.Content>
    //           <Card.Content extra>
    //             <Label color='orange' horizontal>Support</Label>
    //             <Label color='teal' horizontal>PTO</Label>
    //             <Label color='red' horizontal>Safe</Label>
    //           </Card.Content>
    //           <div className='reviewsCardContainer'>
    //             <Statistic size='mini' label='Ratings' value='208' />
    //             <div className="featured featured-progressbar">
    //               <CircularProgressbar percentage={90} />
    //             </div>
    //           </div>
    //         </Card>
    //   )
    // // })

  return (
    <Grid textAlign='center'>
      {
        companies.map((company,i) => {
          return (
            <Card key ={i} onClick={() => this.select(company)} id={company.id} className='card'>
              <Card.Content>
                <div>
                  <div>
                    <Image size='mini' src={company.squareLogo} />
                  </div>
                  <Card.Header>
                    {company.name}
                  </Card.Header>
                </div>
                <Card.Meta>
                  Description: From next-generation networks to industry-leading mobility, cloud, and video, Cisco provides integrated architecture and software solutions, connecting people, processes, companies, and things.
                </Card.Meta>
                <Card.Description>
                  Overall : {company.ratingDescription}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label color='orange' horizontal>Support</Label>
                <Label color='teal' horizontal>PTO</Label>
                <Label color='red' horizontal>Safe</Label>
              </Card.Content>
              <div className='reviewsCardContainer'>
                <Statistic size='mini' label='Ratings' value={company.numberOfRatings} />
                <div className="featured featured-progressbar">
                  <CircularProgressbar percentage={company.overallRating * 20} />
                </div>
              </div>
            </Card>
          )
        })
      }

    </Grid>)
  }
}
