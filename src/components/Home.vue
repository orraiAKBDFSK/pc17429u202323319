<!-- src/components/Home.vue -->
<template>
  <div>
    <Toolbar />
    <h2>{{ $t("craftBreweries") }}</h2>
    <div class="breweries-container">
      <CraftBreweryCard v-for="brewery in breweries" :key="brewery.id" :brewery="brewery" />
    </div>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue';
import CraftBreweryCard from './CraftBreweryCard.vue';  //
import { fetchBreweries } from '../infrastructure/breweryService';

export default {
  name: 'Home',
  components: {
    Toolbar,
    CraftBreweryCard
  },
  data() {
    return {
      breweries: []
    };
  },
  mounted() {
    this.fetchBreweries();
  },
  methods: {
    async fetchBreweries() {
      try {
        const data = await fetchBreweries();
        this.breweries = data;  // Asigna las cerveceras a la variable 'breweries'
      } catch (error) {
        console.error('Error fetching breweries:', error);
      }
    }
  }
};
</script>

<style scoped>
.breweries-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
