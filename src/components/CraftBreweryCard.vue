<!-- src/components/CraftBreweryCard.vue -->
<template>
  <div class="brewery-card">
    <img :src="brewery.imageUrl || placeholder" alt="Brewery Image" />
    <h3>{{ brewery.name }}</h3>
    <p>{{ brewery.brewery_type }} | {{ brewery.city }} | {{ brewery.state }} | {{ brewery.country }}</p>
    <button @click="goToWebsite">{{ $t("visitWebsite") }}</button>
  </div>
</template>

<script>
export default {
  name: 'CraftBreweryCard',
  props: {
    brewery: Object,
  },
  data() {
    return {
      placeholder: 'https://via.placeholder.com/150',
    };
  },
  methods: {

    toKebabCase(str) {
      return str
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '');
    },
    goToWebsite() {
      const kebabName = this.toKebabCase(this.brewery.name);
      window.open(`https://cbia.org/breweries/${kebabName}`, '_blank');
    }
  }
};
</script>

<style scoped>
.brewery-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
}
.brewery-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
button {
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>
