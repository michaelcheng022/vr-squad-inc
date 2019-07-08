import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'next/link';
import { Player } from 'video-react';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import ImageGallery from './ImageGallery';
import Map from './Map';
import formatNumber from '../lib/formatNumber';
import DeleteListing from './DeleteListing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBed, faToilet, faSign, faRulerCombined } from '@fortawesome/free-solid-svg-icons'
const SingleListingStyles = styled.div`
  @media (max-width: 400px) {
    margin: 0;
  }
  
  max-width: 1200px;
  min-width: 300px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  font-family: 'Roboto', sans-serif;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  img {
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    object-fit: contain;
  }
  .button-container {
    float: right;
    
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
  }
  .btn-delete {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .details {
    margin: 3rem;
    font-size: 14px;
  }

  .description {
    padding: 10px 34px;
    line-height: 28px;
    font-size: 17px;
  }

  .section {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  .contact-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 100px 0;
  }
  .agent-picture img {
    height: 175px;
    width: 175px;
    object-fit: cover;
  }

  .agent-details {
    margin-left: 10px;
    font-family: 'Roboto Condensed', sans-serif;
    font-style: bold;
    text-transform: uppercase;
  }
  .agent-title {
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    font-weight: 1000;
  }
  .agent-company {
    margin-bottom: 10px;
  }
  .agent-contact {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    margin-left: 5px;
    font-weight: 550;
  }

  .agent-website {
    margin-top: 15px;
    margin-left: 5px;
  }

  .agent-website a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    color: black;
    cursor: pointer;
  }
  .agent-website a:hover {
    color: blue;
  }
  .section h3 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 32px;
    font-style: bold;
    width: 100%; 
    text-align: left;
    text-indent:40px;
    border-bottom: 1.5px solid #000; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
  }
  .section h3 span { 
    background:#fff; 
    padding:0 10px; 
  }

  .section ul {
    font-size: 20px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 50px;
    margin-left: 0;
  }

  .section ul li{
    margin: 0 auto;
  }

  .video-container {
    display:block;
    margin: 0 auto;
    padding: 3rem;
    @media (min-width: 1300px) {
      width: 800px;
      padding: 4rem;
    }
  }
`;

const SINGLE_LISTING_QUERY = gql`
  query SINGLE_LISTING_QUERY($id: ID!) {
    listing(where: { id: $id }) {
      id
      address
      description
      mainImage
      images
      video
      rooms
      bath
      lotSize
      houseSize
      price
    }
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

class SingleListing extends Component {
  render() {
    return (
      <Query
        query={SINGLE_LISTING_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.listing) return <p>No listing Found for {this.props.id}</p>;
          const listing = data.listing;
          return (
            <SingleListingStyles>
              <Head>
                <title>VR Squad Inc | {listing.address}</title>
              </Head>
              <div className="details">
                <h2>{listing.address}</h2>
                <img src={listing.mainImage} alt={listing.description}/>
                <div className="section">
                  <h3><span>DESCRIPTION</span></h3>
                  <p className="description">{listing.description}</p>
                </div>
                <div className="section">
                  <h3><span>DETAILS</span></h3>
                  <div className="specs">
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faSign} size="3x" />
                        <h4>$ {formatNumber(listing.price)}</h4>
                        <p>price</p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faHome} size="3x"/>
                        <h4>{formatNumber(listing.houseSize)} sq/ft</h4>
                        <p>house-size</p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faRulerCombined} size="3x"/>
                        <h4>{formatNumber(listing.lotSize)} sq/ft</h4>
                        <p>lot-size</p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faBed} size="3x"/>
                        <h4>{listing.rooms}</h4>
                        <p>bedrooms</p>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faToilet} size="3x"/>
                        <h4>{listing.bath}</h4>
                        <p>bath</p>
                      </li>
                    </ul>
                  </div>
                  
                </div>
                {listing.video ?
                  <div className="section">
                    <h3><span>VIDEO</span></h3>
                    <div className="video-container">
                      <Player>
                        <source src={listing.video} />
                      </Player>
                    </div>
                  </div>
                : null}
                <div className="section">
                  <h3><span>GALLERY</span></h3>
                  <ImageGallery images={listing.images} />
                </div>
                <Query query={CURRENT_USER_QUERY}>
                {({ data, error, loading }) => {
                  console.log(data.me);
                  const me = data.me;
                  return (
                    <div className="section">
                      <h3><span>PRESENTED BY</span></h3>
                      <div className="contact-card">
                        <div className="agent-picture">
                          <img src={me.profilePicture} />
                        </div>
                        <div className="agent-details">
                          <div className="agent-title">{me.name}</div>
                          <div className="agent-contact agent-company">{me.company}</div>
                          <div className="agent-contact">{me.contactEmail}</div>
                          <div className="agent-contact">{me.phone}</div>
                          <div className="agent-website"><a href={me.website}>website</a></div>
                        </div>
                      </div>
                    </div>
                  )}}
                </Query>
                <div className="button-container">
                  <Link
                    href={{
                      pathname: 'update',
                      query: { id: listing.id },
                    }}
                  >
                    <button className="btn btn-edit">EDIT</button>
                  </Link>
                  <button className="btn btn-delete"><DeleteListing id={listing.id}>DELETE</DeleteListing></button>
              </div>
              </div>
            </SingleListingStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleListing;
