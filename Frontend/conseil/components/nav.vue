<template>
  <div>
    <div
      class="navfixed navSize d-flex justify-content-around align-items-center"
    >
      <div class="navButtonLogo">
        <img
          width="180px"
          height="70px"
          src="../assets/starkey.jpg"
          alt="logo audio-conseil"
        />
      </div>
      <div class="col-md-8 d-flex justify-content-around">
        <NuxtLink class="navButtonSize" to="/">Accueil</NuxtLink>
        <NuxtLink class="navButtonSize" to="/Solutions">Solutions</NuxtLink>
        <NuxtLink class="navButtonSize" to="/">Contact</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style>
.navfixed {
  position: fixed;
  z-index: 10;
  top: 0;
}
.navSize {
  width: 100%;
  height: 80px;
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
  height: 80px;
  width: 100px;
  font-weight: 900;
  color: white;
}
.navButtonSize:hover {
  background: white;
  cursor: pointer;
  color: #244d78;
}
</style>
