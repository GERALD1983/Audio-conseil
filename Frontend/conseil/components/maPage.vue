<template>
  <div>
    <div
      class="mobileBackHead backHead d-flex justify-content-center align-items-center"
    >
      <div class="col-xl-8 col-lg-10 col-md-12">
        <div class=" d-flex justify-content-start">
          <h5
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="aos-item mobileTitreHead backtitreHead1"
          >
            Votre spécialiste en correction auditive à Casablanca
          </h5>
        </div>
        <div class=" d-flex justify-content-end">
          <h5
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="aos-item mobileTitreHead backtitreHead2"
          >
            Magasin au service de votre audition Prothése haute qualité
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "maPage"
};
</script>

<style>
.backtitreHead {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.backtitreHead1 {
  height: 70px;
  width: 35em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);

  color: #244d78;
}
.backtitreHead2 {
  height: 70px;
  width: 35em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(173, 255, 47, 0.7);

  color: #ffffff;
}
.backHead {
  background-image: url("../assets/auditbleu.jpg");
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
}
</style>
