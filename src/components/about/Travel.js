import { useState } from "react"

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

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const mylist = ["Japan", "Germany", "United States of America", "Canada", "Mexico", "Iceland", "Norway", "Sweden", "Denmark", "Thailand", "France",
"Malaysia", "United Kingdom", "Switzerland", "Finland", "Jamaica", "The Bahamas"];

function Map() {
const [content, setcontent] = useState("");
return (
<div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center'}}>

    <div style={{width:'900px', borderStyle:'double'}}>
    <ComposableMap data-tip="">
    <ZoomableGroup>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            
            const d = mylist.find((s) => s === geo.properties.name)
            return(
            <Geography 
            stroke="#fff"
            key={geo.rsmKey} 
            geography={geo}
            fill={d ? "#28fc48" : "transparent" }
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