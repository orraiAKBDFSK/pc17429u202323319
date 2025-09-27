<!-- src/components/Toolbar.vue -->
<template>
  <header class="toolbar">
    <div class="logo">
      <img :src="logoUrl" alt="Craft Beer Logo" />
      <span>{{ $t("toolbar") }}</span>
    </div>
    <div class="language-selector">
      <button @click="setLanguage('en')">EN</button>
      <button @click="setLanguage('es')">ES</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      logoUrl: 'https://logo.clearbit.com/cbia.org', // Clearbit Logo API
    };
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
}
.logo img {
  height: 40px;
  margin-right: 10px;
}
.language-selector button {
  margin-left: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
