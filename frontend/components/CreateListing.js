import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const CREATE_LISTING_MUTATION = gql`
  mutation CREATE_LISTING_MUTATION(
    $address: String!
    $description: String!
    $mainImage: String!
    $images: ListingCreateimagesInput
    $rooms: Int!
    $bath: Float!
    $lotSize: Int!
    $houseSize: Int!
    $price: Int!
 
  ) {
    createListing(
      address: $address
      description: $description
      mainImage: $mainImage
      images: $images
      rooms: $rooms
      bath: $bath
      lotSize: $lotSize
      houseSize: $houseSize
      price: $price
    ) {
      id
      address
      images
      mainImage
    }
  }
`;

class CreateListing extends Component {
  state = {
    address: '',
    description: '',
    mainImage: '',
    images: { set: []},
    rooms: '',
    bath: '',
    lotSize: '',
    houseSize: '',
    price: ''
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  handleImages = e => {
    console.log(e.target.value);
    const value = e.target.value;
    const imgArr = value.split('+').map(e => e.trim());
    console.log(imgArr);
    
    this.setState({ images: {set: imgArr}});
  };
  render() {
    return (
      <Mutation mutation={CREATE_LISTING_MUTATION} variables={this.state}>
        {(createListing, { loading, error }) => (
          <Form
            onSubmit={async e => {
              // Stop the form from submitting
              e.preventDefault();
              
              console.log(this.state);
              // call the mutation
              const res = await createListing();
              // change them to the single item page
              console.log(res);
              // Router.push({
              //   pathname: '/item',
              //   query: { id: res.data.createListing.id },
              // });
            }}
          >
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
                  value={this.state.title}
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
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="mainImage">
                Thumbnail Image
                <textarea
                  id="mainImage"
                  name="mainImage"
                  placeholder="Enter Image URL"
                  required
                  value={this.state.mainImage}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="images">
                Gallery
                <textarea
                  type="text"
                  id="images"
                  name="images"
                  placeholder="Place ' + ' between image urls"
                  required
                  
                  onChange={this.handleImages}
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
                  value={this.state.rooms}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="bath">
                Bath
                <input
                  type="number"
                  id="bath"
                  name="bath"
                  placeholder="Bathrooms"
                  required
                  value={this.state.bath}
                  onChange={this.handleChange}
                  step="any"
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
                  value={this.state.lotSize}
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
                  value={this.state.houseSize}
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
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </label>

              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateListing;
export { CREATE_LISTING_MUTATION };
