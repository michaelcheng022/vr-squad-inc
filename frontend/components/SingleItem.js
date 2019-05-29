import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';

const SinglelistingStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_LISTING_QUERY = gql`
  query SINGLE_LISTING_QUERY($id: ID!) {
    listing(where: { id: $id }) {
      id
      address
      description
      rooms
      bath
      lotSize
      houseSize
      price
      user
    }
  }
`;
class SingleItem extends Component {
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
            <SingleItemStyles>
              <Head>
                <title>Sick Fits | {listing.title}</title>
              </Head>
              <div className="details">
                <h2>Viewing {listing.title}</h2>
                <p>{listing.description}</p>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default Singlelisting;
