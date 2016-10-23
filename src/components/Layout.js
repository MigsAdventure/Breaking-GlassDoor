import React, { Component } from 'react'
import {Link} from 'react-router'
import classNames from 'classnames'
import { Menu } from 'semantic-ui-react'
import SearchBar from './SearchBar'

export default class Layout extends Component {
  render () {
    let path = this.props.location.pathname

    return (
      <div>
        <Menu inverted color='blue' className="menu" stackable>
          <Menu.Item>
            <img src='//dl2.pushbulletusercontent.com/9HE8l6ZBwCBtRJhdu8FEIB7EXIlduZVO/logo2.png'/>
          </Menu.Item>
          <Menu.Item>
            <h1>Breaking the Glassdoor</h1>
          </Menu.Item>
          <Menu.Item className={classNames({active: path === '/'})}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item className={classNames({active: path === '/detail'})}><Link to="/detail">Detail</Link></Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item> <SearchBar /></Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
