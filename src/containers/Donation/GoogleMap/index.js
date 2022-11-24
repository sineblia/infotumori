import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {


  static defaultProps = {
    center: {
      lat: 37.47982123155747,
      lng: 15.007246399896848
    },
    zoom: 18
  };
 
  render() {
    return (
      

      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCcs4VCKisX0YrNCCd9oIcGmL0XhO4IoA8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.50}
            lng={15.07}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>

      
    );
  }
}
 
export default SimpleMap;

// list of the marker object along with icon
const markerList = [
    { lat: 59.2967322, lng: 18.0009393 },
    { lat: 59.2980245, lng: 17.9971503 },
    { lat: 59.2981078, lng: 17.9980875 },
    { lat: 59.2987638, lng: 17.9917639 }
  ]
 