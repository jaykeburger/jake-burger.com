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
<div style={{width:'100vw', display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', alignItems:'center'}}>
    <h1>Places I've been to</h1>

    <div style={{width:'50%', borderStyle:'double'}}>
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
            fill={d ? "#ab71d1" : "transparent" }
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
</div>);
}

export default Map;