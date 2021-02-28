<template>
  <div>
    <div
      class="navfixed navSize d-flex justify-content-around align-items-center"
    >
      <div class="navButtonSize">
        <img
          width="200px"
          height="80px"
          src="../assets/starkey.jpg"
          alt="logo audio-conseil"
        />
      </div>
      <div class="col-md-8 d-flex justify-content-around">
        <div class="navButtonSize">ACCUEIL</div>
        <div class="navButtonSize">SOLUTIONS</div>
        <div class="navButtonSize">CONTACT</div>
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
  height: 100px;
  background: transparent;
}
.navButtonSize {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 120px;
  font-weight: 900;
  color: white;
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
