import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ImageGallery from 'react-image-gallery';
import Link from 'next/link';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';


const SingleListingStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  font-family: Arial;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  img {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
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
  .section {
    margin-bottom: 20px;
  }
  .section h3 {
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

`;

const SINGLE_LISTING_QUERY = gql`
  query SINGLE_LISTING_QUERY($id: ID!) {
    listing(where: { id: $id }) {
      id
      address
      description
      mainImage
      images
      rooms
      bath
      lotSize
      houseSize
      price
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
          const images = listing.images.map(e => {
            let obj = {original: e}
            return obj
          })
          return (
            <SingleListingStyles>
              <Head>
                <title>Sick Fits | {listing.address}</title>
              </Head>
              <div className="details">
                <h2>{listing.address}</h2>
                <img src={listing.mainImage} alt={listing.description}/>
                <div className="section">
                  <h3><span>DESCRIPTION</span></h3>
                  <p>{listing.description}</p>
                </div>
                <div className="section">
                  <h3><span>SPECIFICATIONS</span></h3>
                  <ul>
                    <li>PRICE: {formatMoney(listing.price)}</li>
                    <li>{listing.rooms} BED</li>
                    <li>{listing.bath} BATH</li>
                    <li>HOUSE SIZE: {listing.houseSize} SQ FT</li>
                    <li>LOT SIZE: {listing.lotSize} SQFT</li>
                  </ul>
                </div>
                <div className="section">
                  <h3><span>GALLERY</span></h3>
                  <ImageGallery items={images} />
                </div>
                <div className="button-container">
                  <Link
                    href={{
                      pathname: 'update',
                      query: { id: listing.id },
                    }}
                  >
                    <button className="btn btn-edit">EDIT</button>
                  </Link>
                  <button className="btn btn-delete"><DeleteItem id={listing.id}>DELETE</DeleteItem></button>
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
