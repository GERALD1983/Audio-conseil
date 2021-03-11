<template>
  <div class="">
    <NavBar class="navigation" />
    <Actu />
    <Foot />
  </div>
</template>

<script>
import NavBar from "../components/nav.vue";

import Actu from "../components/actu.vue";
import Foot from "../components/footer.vue";
export default {
  components: { NavBar, Actu, Foot }
};
</script>

<style></style>
