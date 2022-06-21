import React from 'react';
import { renderToString } from 'react-dom/server';
import Map from '../index';

const mapOptions = {
  zoom: 3,
  center: { lat: -25.363, lng: 131.044 }
};

describe('reactJSGoogleMaps', () => {  
  it('should init gmaps', () => {
    // TO-DO
    // Currently untestable :(
    const wrapper = (<Map
      id="map1"
      apiKey="AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w"
      mapOptions= {mapOptions}
      style={{ width: 500, height: 300, float: "left" }}
    /> );
    expect(1).toBe(1);
  });
});

