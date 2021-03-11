<template>
  <div class="">
    <NavBar class="navigation" />
    <Solutions />
    <Foot />
  </div>
</template>

<script>
import NavBar from "../components/nav.vue";

import Solutions from "../components/solutions.vue";
import Foot from "../components/footer.vue";
export default {
  components: { NavBar, Solutions, Foot }
};
</script>

<style></style>
