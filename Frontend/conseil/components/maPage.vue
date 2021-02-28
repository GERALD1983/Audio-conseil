<template>
  <div>
    <div class="backHead d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <div class=" ">
          <h5 class="backtitreHead1">
            Votre spécialiste en correction auditive à Casablanca
          </h5>
        </div>
        <div class=" d-flex justify-content-end">
          <h5 class="backtitreHead2">
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
