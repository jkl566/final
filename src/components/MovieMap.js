var React = require('react')
var ReactGMaps = require('react-gmaps')
var {Gmaps, Marker} = ReactGMaps

var hotels = require('../data/movies.json')

var HotelMap = React.createClass({
  render: function() {
    return (
      <div className="map col-sm-12">
        <Gmaps width={'100%'}
               height={'480px'}
               lat={'41.9021988'}
               lng={'-87.6285782'}
               zoom={11}
               loadingMessage={'Movies soon...'}
               params={{v: '3.exp', key: 'AIzaSyB3p_xQIXsFMDGLYNEiVkgW5fsVSUOd01c'}}>
         {movies.map(function(place) {
             //return <Marker lat={'41.9021988'} lng={'-87.6285782'}/>
            return <Marker lat={place.lat} lng={place.long}/>
          })}
        </Gmaps>
      </div>
    )
  }
})

module.exports = MovieMap
