<!-- src/components/Home.vue -->
<template>
  <div>
    <Toolbar />
    <h2>{{ $t("craftBreweries") }}</h2>
    <div class="breweries-container">
      <!-- Aquí irán las tarjetas de cervecerías -->
    </div>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue';  // Ruta al componente Toolbar

export default {
  name: 'Home',
  components: {
    Toolbar
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
