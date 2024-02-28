import React from 'react';
import L from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const Legend = ({hovered}) => {

    
    const map = useMap();
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "description");
      L.DomEvent.disableClickPropagation(div);

      const text = "<b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...";

      div.innerHTML = text;

      return div; // Return the created element
    };

    legend.addTo(map);

  return null; // No need to return anything
};

export default Legend;
