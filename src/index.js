import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from 'react-js-google-maps';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import './style.css';

const setMarker = (map) => {
  const uluru = { lat: -25.363, lng: 131.044 };
  const marker = new window.google.maps.Marker({
    position: uluru,
    map: map
  });
  window.google.maps.event.addListener(marker, 'click', function() {    
    const infoWindow = new window.google.maps.InfoWindow({
      content: "<b>Header</b><div>Info Content</div>"
    });
    infoWindow.open(map, marker);
  })
};


class App extends Component {

  render() {
    const mapOptions = {
      zoom: 4,
      center: { lat: -25.363, lng: 131.044 }
    }    
    return (
      <div>
        <Map
          id="map1"
          apiKey="AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w"
          mapOptions= {mapOptions}
          style={{ width: 500, height: 300, float: "left" }}
          
          
          onLoad={setMarker}
        />  
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));



// apiKey="AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w"