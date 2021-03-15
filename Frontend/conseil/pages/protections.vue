<template>
  <div>
    <NavBar class="navigation" />
    <Bouchon />
    <Foot />
  </div>
</template>

<script>
import NavBar from "../components/nav.vue";
import Bouchon from "../components/bouchon.vue";
import Foot from "../components/footer.vue";
export default {
  components: { NavBar, Bouchon, Foot },
  methods: {}
};
</script>

<style></style>
