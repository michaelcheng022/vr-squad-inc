import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!, 
    $name: String!, 
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    company: '',
    website: '',
    phone: ''

  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signup();
              this.setState({ name: '', email: '', password: '' });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign Up for An Account</h2>
              <Error error={error} />
              <label htmlFor="email">
                Email*
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password*
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="name">
                Name*
                <input
                  type="text"
                  name="name"
                  placeholder="full name with space between"
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="company">
                Company
                <input
                  type="text"
                  name="company"
                  placeholder="company"
                  value={this.state.company}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="website">
                Website
                <input
                  type="text"
                  name="website"
                  placeholder="website"
                  value={this.state.website}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="phone">
                Phone Number
                <input
                  type="text"
                  name="phone"
                  placeholder="ex. (515)-555-5555"
                  value={this.state.phone}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Sign Up!</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signup;
