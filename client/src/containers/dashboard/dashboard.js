import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap/lib'
import Plog from '../../components/tabs/plog'
import Rconfig from '../../components/tabs/rconfig'
class Dashboard extends Component {

  constructor(props) {
    super(props);
    // this.props.protectedTest();
  }

  render() {
    return (
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Tab 1">
            <Plog />
        </Tab>
        <Tab eventKey={2} title="Tab 2">
          <Rconfig />
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.auth.content };
}

export default connect(mapStateToProps)(Dashboard);
