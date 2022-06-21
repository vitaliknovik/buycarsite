![react-js-google-maps](https://raw.githubusercontent.com/aliustaoglu/react-js-google-maps/master/img/react-js-google-maps.png)

# React Js Google Maps
Lazy loading Google Maps API Wrapper for React.JS. 

# [Click For the Online Demo](https://stackblitz.com/edit/react-ohakbs?embed=1&file=index.js)

All I needed was a simple React component that initiates Google Maps API without any dependencies other than React or Google. I want is to pass my props to my component and handle the rest with the Google API. So I wrote this simple library.

The component needs an id for the div that will wrap the canvas object created by Google Maps API. mapOptions is the object that you normally pass onto google while you're creating a new map. It will also need some styling(either style or className) for this div. That's all. The rest we will do with the Google API.

Prop Types
```json
{
    id: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired,
    mapOptions: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object
}
```

Usage is simple:
```js
import React, { Component } from 'react';
import Map from 'react-js-google-maps';

const setMarker = () => {
  var uluru = { lat: -25.363, lng: 131.044 };
  var marker = new window.google.maps.Marker({
    position: uluru,
    map: window.gmaps['map1'].gmap
  });
};

/*
May be Some react code here
*/
render() {
  const mapOptions = {
    zoom: 4,
    center: { lat: -25.363, lng: 131.044 }
  }
  // You can make API calls to load your data into the map
  // after the map is initialized
  onMapLoad() {
    setMarker();
  }
  return (
    <div>
      <Map
        id="map1"
        apiKey="MY_API_KEY"
        mapOptions={mapOptions}
        style={{ width: '100%', height: 480 }}
        onLoad={this.onMapLoad}
      />
    </div>
  );
}

```

# Version History:
No history info until 1.5.1
1.5.2: Added onLoad prop to trigger a custom event when the map is ready.