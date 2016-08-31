import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    // this.props.protectedTest();
  }

  render() {
    return (
      <div>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.auth.content };
}

export default connect(mapStateToProps)(Dashboard);
