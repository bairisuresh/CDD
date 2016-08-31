import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import { protectedTest } from '../../actions/auth';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.props.protectedTest();
  }

  isRole(roleToCheck, toRender) {
    let userRole = cookie.load('user').role;

    if (userRole == roleToCheck) {
      return toRender;
    }

    return false;
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

export default connect(mapStateToProps, { protectedTest })(Dashboard);
