import { createFileRoute } from '@tanstack/react-router'
import Map, { Source, Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import type {FeatureCollection} from 'geojson';

import geojsonData from '@/data/my_travel.json';

export const Route = createFileRoute('/map')({
  component: RouteComponent,
})

const layerStyle = {
  id: 'point',
  type: 'circle' as const,
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};

function RouteComponent() {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5 
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="https://demotiles.maplibre.org/globe.json"
    >
       <Source id="my-data" type="geojson" data={geojsonData as FeatureCollection}>
        <Layer {...layerStyle} />
      </Source>
    </Map>
  )
} 