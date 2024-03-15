import React from "react";
import MapContext from "./MapContext";

const MapContextProvider = ({children}) => {
    const [NewCenter,setNewCenter] = React.useState([])
    const [VillageCoord,setVillageCoord] = React.useState([])
    return(
        <MapContext.Provider value={{NewCenter,setNewCenter,VillageCoord,setVillageCoord}}>
            {children}
        </MapContext.Provider>
    )
}


export default MapContextProvider;