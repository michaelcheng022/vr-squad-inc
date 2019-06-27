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
  background: rgba(0,0,0,0.02);
  border: 5px solid white;
  display: flex;
  font-family: Arial;
  justify-content: center;
  
  .account-container {
    margin: 60px 30px;

  }
  .picture-container {
    display: block;
    margin: 0 auto;
  }

  .picture-container img {
    display: block;
    margin: 0 auto;
    width: 240px;
    height: 240px;
    object-fit: cover;
    border: 1px solid black;
  }
  .details-container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .section p {
    margin: auto 0 auto 50px;
    
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
      contactEmail
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
                    <h4>NAME </h4>
                    <p>{me.name}</p>
                  </div>
                  <div className="section">
                    <h4>USERNAME</h4>
                    <p>{me.email}</p>
                  </div>
                  <div className="section">
                    <h4>PHONE</h4>
                    <p>{me.phone}</p>
                  </div>
                  <div className="section">
                    <h4>COMPANY</h4>
                    <p>{me.company}</p>
                  </div>
                  <div className="section">
                    <h4>WEBSITE</h4>
                    <p>{me.website}</p>
                  </div>
                  <div className="section">
                    <h4>CONTACT-EMAIL</h4>
                    <p>{me.contactEmail}</p>
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
