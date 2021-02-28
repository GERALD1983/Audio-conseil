<template>
  <div class="">
    <NavBar />
    <MaPage />
    <Contenue />
  </div>
</template>

<script>
import NavBar from "../components/nav.vue";
import MaPage from "../components/maPage.vue";
import Contenue from "../components/contenue.vue";
export default {
  components: { MaPage, NavBar, Contenue }
};
</script>

<style></style>
