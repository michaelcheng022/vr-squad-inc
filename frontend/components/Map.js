import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';


class Map extends React.Component {
  constructor(props){
      super(props);

      this.state = {
          images: this.props.images
      };
  }

  initMap = () => {
      // The location of Uluru
      var uluru = {lat: -25.344, lng: 131.036};
      // The map, centered at Uluru
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 4, center: uluru});
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({position: uluru, map: map});
    }

    render () {
        return (
          <div id="map"></div>
        );
    }
}

export default Map;