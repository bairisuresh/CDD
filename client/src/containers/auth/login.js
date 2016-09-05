import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, browserHistory } from 'react-router';
import { loginUser } from '../../actions/auth';

const form = reduxForm({
  form: 'login'
});

class Login extends Component {
  constructor (props, context) {
    super(props, context);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }
  // componentWillReceiveProps(){
  //   if(this.props.authenticated){
  //       browserHistory.push('/dashboard');
  //   }
  // }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderAlert()}
          <div>
            <label>Email</label>
            <Field name="email" className="form-control" component="input" type="text" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" className="form-control" component="input" type="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated,
    content: state.auth.content
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));
