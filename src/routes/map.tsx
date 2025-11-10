import { createFileRoute } from '@tanstack/react-router'
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useState } from 'react';

export const Route = createFileRoute('/map')({
  component: RouteComponent,
})

function RouteComponent() {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5
  });

  return (
    <Map
      {...viewState}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="https://demotiles.maplibre.org/globe.json"
    />
  )
} 