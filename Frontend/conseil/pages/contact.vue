<template>
  <div class="">
    <NavBar class="navigation" />
    <Contact />
    <Foot />
  </div>
</template>

<script>
import NavBar from "../components/nav.vue";

import Contact from "../components/contact.vue";
import Foot from "../components/footer.vue";
export default {
  components: { NavBar, Contact, Foot }
};
</script>

<style></style>
