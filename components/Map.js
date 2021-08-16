import React, { useState } from 'react'
import ReactMapGL,{Marker,Popup} from 'react-map-gl'
import getCenter from 'geolib/es/getCenter';

const Map = ({searchResults}) => {

    const [selectedLocation, setSelectedLocation]=useState({});

    //Transform the serach results object  into the object we require

    const coordinates= searchResults.map((result,index)=>({
        longitude:result.long,
        latitude:result.lat,
    }))

    const center= getCenter(coordinates);
    const [viewport,setViewPort]=useState({
        width:'100%',
        height:'30%',
        latitude:center.latitude,
        longitude:center.longitude,
        zoom:11,
    });

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/aneeshcoder03/cksf4xuao3y3d17p1j2fb7p3d'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport)=>setViewPort(nextViewport)}
        >
            {searchResults.map((result,index)=>(
                <div key={index}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p onClick={()=>setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce' aria-label='push-pin' role='img'>📌</p>
                    </Marker>

                    {/* The pop that should show if we click on a Marker */}

                        {selectedLocation.long === result.long ?(
                            <Popup
                                closeOnClick={true}
                                onClose={()=>setSelectedLocation({})}
                                latitude={result.lat}
                                longitude={result.long}
                            >
                                {result.title}
                            </Popup>    
                        ):(false)}

                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
