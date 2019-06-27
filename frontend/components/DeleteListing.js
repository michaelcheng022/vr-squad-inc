import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_LISTINGS_QUERY } from './Listings';

const DELETE_LISTING_MUTATION= gql`
  mutation DELETE_LISTING_MUTATION($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

class DeleteListing extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_LISTINGS_QUERY });
    console.log(data, payload);
    // 2. Filter the deleted item out of the page
    data.listings = data.listings.filter(listing => listing.id !== payload.data.deleteListing.id);
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_LISTINGS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_LISTING_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteListing, { error }) => (
          <span
            onClick={() => {
              if (confirm('Are you sure you want to delete this item?')) {
                deleteListing();
              }
            }}
          >
            {this.props.children}
          </span>
        )}
      </Mutation>
    );
  }
}

export default DeleteListing;
