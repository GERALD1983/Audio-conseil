<template>
  <div class="">
    <NavBar class="navigation" />
    <MaPage />
    <Contenue />
    <Foot />
  </div>
</template>

<script>
import NavBar from "../components/nav.vue";
import MaPage from "../components/maPage.vue";
import Contenue from "../components/contenue.vue";
import Foot from "../components/footer.vue";
export default {
  components: { MaPage, NavBar, Contenue, Foot },
  methods: {}
};
</script>

<style></style>
