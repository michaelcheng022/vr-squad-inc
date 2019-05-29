import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const SINGLE_LISTING_QUERY = gql`
  query SINGLE_LISTING_QUERY($id: ID!) {
    listing(where: { id: $id }) {
      address
      description
      rooms
      bath
      lotSize
      houseSize
      price
    }
  }
`;

const UPDATE_LISTING_MUTATION = gql`
  mutation UPDATE_LISTING_MUTATION(
    $address: String
    $description: String
    $rooms: Int
    $bath: Int
    $lotSize: Int
    $houseSize: Int
    $price: Int, 
    $id: ID!
  ) {
    updateListing(
      id: $id
      address: $address
      description: $description
      rooms: $rooms
      bath: $bath
      lotSize: $lotSize
      houseSize: $houseSize
      price: $price
      
      
    ) {
        address
        description
        rooms
        bath
        lotSize
        houseSize
        price 
    }
  }
`;

class UpdateItem extends Component {
  state = {};
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  // kinda confused about passing in updateListingMutation
  updateListing = async (e, updateListingMutation) => {
    e.preventDefault();
    console.log('Updating Item!!');
    console.log(this.state);
    const res = await updateListingMutation({
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
        query={SINGLE_LISTING_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.listing) return <p>No Item Found for ID {this.props.id}</p>;
          return (
            <Mutation mutation={UPDATE_LISTING_MUTATION} variables={this.state}>
              {(updateListing, { loading, error }) => (
                <Form onSubmit={e => this.updateListing(e, updateListing)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="address">
                      Address
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Address"
                        required
                        defaultValue={data.listing.address}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="description">
                      Description
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Enter A Description"
                        required
                        defaultValue={data.listing.description}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="rooms">
                      Rooms
                      <input
                        type="number"
                        id="rooms"
                        name="rooms"
                        placeholder="Rooms"
                        required
                        defaultValue={data.listing.rooms}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="price">
                      Bath
                      <input
                        type="number"
                        id="bath"
                        name="bath"
                        placeholder="Bathrooms"
                        required
                        defaultValue={data.listing.bath}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="lotSize">
                      Lot Size
                      <input
                        type="number"
                        id="lotSize"
                        name="lotSize"
                        placeholder="Lot Size"
                        required
                        defaultValue={data.listing.lotSize}
                        onChange={this.handleChange}
                      />
                    </label>
                    
                    <label htmlFor="houseSize">
                      House Size
                      <input
                        type="number"
                        id="houseSize"
                        name="houseSize"
                        placeholder="houseSize"
                        required
                        defaultValue={data.listing.houseSize}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="price">
                      Price
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        required
                        defaultValue={data.listing.price}
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

export default UpdateItem;
export { UPDATE_LISTING_MUTATION };
