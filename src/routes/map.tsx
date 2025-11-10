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
    'circle-color': '#EA4335'
  }
};

const labelLayerStyle = {
  id: 'point-labels',
  type: 'symbol' as const,
  layout: {
    'text-field': ['concat', ['get', 'name'], ', ', ['get', 'country']] as any,
    'text-font': ['Open Sans Bold', 'Open Sans Regular'],
    'text-size': 13,
    'text-offset': [0, 1.5] as [number, number],
    'text-anchor': 'top' as const
  },
  paint: {
    'text-color': '#000000',
    'text-halo-color': '#FFFFFF',
    'text-halo-width': 3,
    'text-halo-blur': 1
  }
};

function RouteComponent() {
  return (
    <Map
      initialViewState={{
        longitude: 120.9842,
        latitude: 14.5995,
        zoom: 3.5 
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="https://demotiles.maplibre.org/globe.json"
    >
       <Source id="my-data" type="geojson" data={geojsonData as FeatureCollection}>
        <Layer {...layerStyle} />
        <Layer {...labelLayerStyle} />
      </Source>
    </Map>
  )
} 