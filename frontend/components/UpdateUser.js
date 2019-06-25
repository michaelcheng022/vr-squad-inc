import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      name
      profilePicture
      company 
      website 
      phone
    }
  }
`;

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $name: String
    $profilePicture: String
    $company: String
    $website: String 
    $phone: String
    $id: ID!
  ) {
    updateUser(
      name:$name
      profilePicture: $profilePicture
      company: $company
      website: $website
      phone: $phone
      id: $id
    ) {
        name
        profilePicture
        company
        website
        phone 
    }
  }
`;

class UpdateUser extends Component {
  state = {};
  handleChange = e => {
    const { name, type, value } = e.target;
    console.log(e.target.value);
    const val = type === 'number' ? parseFloat(value) : value;
    console.log(val);
    this.setState({ [name]: val });
    console.log(this.state);
  };
  // kinda confused about passing in updateListingMutation
  updateUser = async (e, updateUserMutation) => {
    e.preventDefault();
    console.log('Updating User!!');
    console.log(this.state);
    const res = await updateUserMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    });
    console.log(res);
    console.log('Updated!!');
  };

  render() {
    return (
      <Query
        query={CURRENT_USER_QUERY}
      >
      {({ data, error, loading }) => {
        console.log(data.me);
        const me = data.me;
          return (
            <Mutation mutation={UPDATE_USER_MUTATION} variables={this.state}>
              {(updateUser, { loading, error }) => (
                <Form onSubmit={e => this.updateUser(e, updateUser)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="name">
                      Name
                      <input
                        type="text"
                        name="name"
                        placeholder="full name with space between"
                        defaultValue={me.name}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="profilePicture">
                      Profile Picture URL
                      <input
                        type="text"
                        name="profilePicture"
                        placeholder="Enter profile picture URL"
                        defaultValue={me.profilePicture}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="company">
                      Company
                      <input
                        type="text"
                        name="company"
                        placeholder="company"
                        defaultValue={me.name}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="website">
                      Website
                      <input
                        type="text"
                        name="website"
                        placeholder="website"
                        defaultValue={me.website}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="phone">
                      Phone Number
                      <input
                        type="text"
                        name="phone"
                        placeholder="ex. (515)-555-5555"
                        defaultValue={me.phone}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="contactEmail">
                      Contact-Email
                      <input
                        type="text"
                        name="contactEmail"
                        placeholder="Enter Contact-Email"
                        defaultValue={me.contactEmail}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateUser;
export { UPDATE_USER_MUTATION };
