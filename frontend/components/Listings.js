import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Listing from './Listing';

const ALL_LISTINGS_QUERY = gql`
  query ALL_LISTINGS_QUERY {
    listings {
      id
      address
      description
      mainImage
      rooms
      bath
      lotSize
      houseSize
      price
      user {
        id
      }
    }
  }
`;


const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 10vw;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    margin: 0 100px;
  }

  @media (max-width: 700px) {
    margin: 0 5vw;
  }
`;

class Listings extends Component {
  render() {
    return (
      <Center>
        <Query
          query={ALL_LISTINGS_QUERY}
          fetchPolicy="network-only"
        >
          {({ data, error, loading }) => {
            console.log(data);
            console.log(this.props.userId);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ItemsList>{data.listings.map(listing => <Listing item={listing} />)}</ItemsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Listings;
export { ALL_LISTINGS_QUERY };
