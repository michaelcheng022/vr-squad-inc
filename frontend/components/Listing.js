import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import DeleteListing from './DeleteListing';

export default class Listing extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.mainImage && <img src={item.mainImage} alt={item.address} />}

        <Title>
          <Link
            href={{
              pathname: '/listing',
              query: { id: item.id },
            }}
          >
            <a>{item.address}</a>
          </Link>
        </Title>
        <div className="buttonList">
          <Link
            href={{
              pathname: 'update',
              query: { id: item.id },
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <DeleteListing id={item.id}>Delete This Item</DeleteListing>
        </div>
      </ItemStyles>
    );
  }
}
