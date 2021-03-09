<template>
  <div>
    <input
      v-model="fillColor"
      type="color"
    >
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 500px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-geo-json :geojson="geojson"
                  :options-style="styleFunction"
      />


    </l-map>

  </div>
</template>

<script>
import {latLng} from "leaflet";
import {LGeoJson, LMap, LMarker, LTileLayer} from "vue2-leaflet";
import axios from 'axios';

export default {
  name: "Mapa",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LGeoJson,

  },
  data() {
    return {
      zoom: 6.4,
      center: latLng(-15.7745457, -48.3575684),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | TRE-GO',
      geojson: null,
      fillColor: "#ff8c00",
    }
  },
  computed: {
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          opacity: 1,
          color: 'white',
          fillColor: fillColor,
          dashArray: '3',
          fillOpacity: 0.5
        };
      };
    },
  },
  async created() {
    await axios.get('https://raw.githubusercontent.com/fititnt/gis-dataset-brasil/master/mesorregiao/geojson/mesorregiao.json')
      .then((response) => {
          const myUf = 'GO'
          const data = response.data.features.filter(item => item.properties.UF === myUf)
          // console.log(response.data.features.filter(item => item.properties.UF === myUf))
          this.geojson = data;
        }
      )
  }
}
// const data = response.data.features
// console.log(response.data.features)

</script>

<style scoped>

</style>
