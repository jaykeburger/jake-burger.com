import React from "react"
import topojsonGeoUrl from '../../assets/raw.githubusercontent.com_deldersveld_topojson_master_world-countries.json'

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from "react-simple-maps";

const markers = [
    {
        markerOffset: -15,
        name: "Houston",
        coordinates :[-95,30]
    }
];

const countriesVisited = ["Japan", "Germany", "United States of America", "Canada", "Mexico", "Iceland", "Norway", "Sweden", "Denmark", "Thailand", "France",
"Malaysia", "United Kingdom", "Switzerland", "Finland", "Jamaica", "The Bahamas"];

function Map() {

return (
<div style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', alignItems:'center'}}>
    <h1>Places I've been to</h1>
    <p>I love travelling, and I am making it my goal to visit every country in the world before I die!</p>
    <div style={{width:'50vw', backgroundColor:'black', border:'hidden', borderRadius:'30px'}}>
    <ComposableMap data-tip="">
    <ZoomableGroup>
      <Geographies geography={topojsonGeoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            
            const d = countriesVisited.find((s) => s === geo.properties.name)
            return(
            <Geography 
            stroke="#fff"
            key={geo.rsmKey} 
            geography={geo}
            fill={d ? "green" : "transparent" }
            style={{
                default: {
                    outline: 'none'
                },
                hover: {
                    outline: 'none'
                },
                pressed: {
                    outline: 'none'
                }
            }}
            />
            );
        })
        }
      </Geographies>
      {markers.map(({name, coordinates, markerOffset}) => (
        <Marker key={name} coordinates={coordinates}>
            <circle r={5} fill="#fff" strokeWidth={2}/>
            <text textAnchor="middle" y={markerOffset} style={{fontFamily:'system-ui', fill:'#fff'}}>
                {name}
            </text>
        </Marker>
      ))}
      </ZoomableGroup>
    </ComposableMap>
    </div>
    <br></br>
    <br></br>
</div>);
}

export default Map;