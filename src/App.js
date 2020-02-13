import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { getSettings } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getSettings();
  }

  render() {
    const { title } = this.props.site;


    if (title) {
      const { title , navigation } = this.props.site;
      return (
        <div>
          {title}

          {navigation.map((nav) => {
            console.log(nav);
            return <li>{nav.url}</li>;
          })}
        </div>

      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    site: state.site,
  }
}


export default connect(mapStateToProps, 
  { getSettings }
)(App);
