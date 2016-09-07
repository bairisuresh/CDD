import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap/lib'
import Plog from '../../components/tabs/plog'
import Rconfig from '../../components/tabs/rconfig'
class Dashboard extends Component {

  constructor(props) {
    super(props);
    console.log("dashborad",this.props.content)
    // this.props.protectedTest();
    this.handleSelect = this.handleSelect.bind(this);

  }
  handleSelect(key) {
    const { actions, content } = this.props;
    if(key === 1){
      alert('selected ' + key);
      actions.fetchPlog({role:content.role,tablcick:true});
    }else {
      alert('selected ' + key);
      actions.fetchRlog({role:content.role,tablcick:true});
    }
  }
  render() {
    let {plogdata, rlogdata, content} = this.props
    const plogProps = {content,plogdata};
    const rlogProps = {content,rlogdata};
    return (
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Tab 1">
            <Plog {...plogProps}/>
        </Tab>
        <Tab eventKey={2} title="Tab 2">
          <Rconfig {...rlogProps} />
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps(state) {
  console.log("in state", state);
  return { content: state.auth.content,plogdata:state.auth.plogdata, rlogdata:state.auth.rlogdata };
}
function mapDispathToProps(dispatch,props){
  var actions = require('../../actions/index');
  return {actions : bindActionCreators(actions,dispatch)};
}

export default connect(mapStateToProps,mapDispathToProps)(Dashboard);
