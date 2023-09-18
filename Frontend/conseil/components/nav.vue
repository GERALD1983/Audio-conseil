<template>
  <div>
    <div>
      <no-ssr>
        <b-navbar
          toggleable="lg"
          class="stopMargPad mobileNavFixed navfixed navSize d-flex justify-content-around align-items-center"
        >
          <b-navbar-brand class="stopMargPad navButtonLogo">
            <img
              @click="toTop"
              width="135px"
              height="70px"
              src="../assets/logo.png"
              alt="logo audio-conseil"
          /></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse
            id="nav-collapse"
            class="col-lg-8 stopMargPad stopBootstrap "
            is-nav
          >
            <b-navbar-nav
              class="col-lg-12 stopMargPad d-flex justify-content-around"
            >
              <b-nav-item>
                <NuxtLink class=" sizeLinkMobile navButtonSize" to="/"
                  >Accueil</NuxtLink
                ></b-nav-item
              >
              <b-nav-item>
                <NuxtLink class=" sizeLinkMobile navButtonSize" to="/Solutions"
                  >Solutions</NuxtLink
                ></b-nav-item
              >
              <b-nav-item>
                <NuxtLink
                  class=" sizeLinkMobile navButtonSize"
                  to="/Protections"
                  >Protections</NuxtLink
                ></b-nav-item
              >
              <b-nav-item>
                <NuxtLink class=" sizeLinkMobile navButtonSize" to="/Actualites"
                  >Actualités</NuxtLink
                ></b-nav-item
              >
              <b-nav-item>
                <NuxtLink class=" sizeLinkMobile navButtonSize" to="/Contact"
                  >Contact</NuxtLink
                ></b-nav-item
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import jump from "jump.js";
export default {
  name: "navbar",
  methods: {
    toTop() {
      // window.scrollTo(0, 400);
      jump(".navigation", {
        duration: 1000,
        callback: () => console.log("Saut terminé!")
      });
    }
  }
};
</script>

<style>
.navfixed {
  position: fixed;
  z-index: 10;
  top: 0;
}

.nav-link {
  padding: 0 !important;
}
.stopBootstrap {
  flex-grow: 0 !important;
}
.navSize {
  width: 100%;
  height: auto;
  min-height: 80px;
  background: rgba(36, 78, 122, 0.5);
}
.navButtonSize {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 120px;
  font-weight: 900;

  color: white;
  text-decoration: none !important;
}
.navButtonLogo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 135px;
  font-weight: 900;
  color: white;
}
.navButtonSize:hover {
  background: white;
  cursor: pointer;
  color: #244d78;
}
</style>
