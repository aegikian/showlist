import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Maps = ({ coordinates }: any) => (
  <YMaps>
    <div>
      <Map style={{ width: '800px', height: '400px', borderRadius: '12px' }} defaultState={{ center: coordinates, zoom: 15 }} >
      <Placemark geometry={coordinates} />
      </Map>
    </div>
  </YMaps>
);

export default Maps;