import React, { Component } from 'react';
import gql from 'graphql-tag';
import Router from 'next/router';
import Link from 'next/link';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MyAccountStyles = styled.div`
  max-width: 700px;
  min-width: 300px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: flex;
  font-family: Arial;
  justify-content: center;
  
  .account-container {
    margin: 60px 30px;

  }
  .picture-container {
    display: flex;
    border: 1px solid black;
  }
  .details-container {
    display: flex;
    flex-direction: column;
  }
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    margin: 0 10px;
    border: 1px solid transparent;
    padding: .125rem .5rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .btn-edit {
    background-color: #ffc107;
    border-color: #ffc107;
    float: right;
  }
  `;

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      profilePicture
      company 
      website 
      phone
      permissions
    }
  }
`;

class MyAccount extends Component {
  constructor(props) {
    super(props) 

    this.state = {}
  }
  
  render() {
    return (
      <MyAccountStyles>
        <Query query={CURRENT_USER_QUERY}>
          {({ data, error, loading }) => {
            console.log(data.me);
            const me = data.me;
            const defaultPicture = 'https://i.stack.imgur.com/34AD2.jpg'
            return (
              <div className="account-container">
                <div className="picture-container">
                  <img src={me.profilePicture ? me.profilePicture : defaultPicture} />
                </div>
                <div className="details-container">
                  <div className="section">
                    <h3>NAME: {me.name}</h3>
                  </div>
                  <div className="section">
                    <h3>USERNAME: {me.email}</h3>
                  </div>
                  <div className="section">
                    <h3>PHONE: {me.phone}</h3>
                  </div>
                  <div className="section">
                    <h3>COMPANY: {me.company}</h3>
                  </div>
                  <div className="section">
                    <h3>WEBSITE: {me.website}</h3>
                  </div>
                  <div className="section">
                    <h3>CONTACT-EMAIL: {me.contactEmail}</h3>
                  </div>
                </div>
                <div className="button-container">
                  <Link
                    href={{
                      pathname: 'edit',
                      query: { id: me.id },
                    }}
                  >
                    <button className="btn btn-edit">EDIT</button>
                  </Link>
                </div>
              </div>
            )

          }}
        </Query> 
      </MyAccountStyles>
    );
  }
}

export default MyAccount;
export { CREATE_LISTING_MUTATION };
