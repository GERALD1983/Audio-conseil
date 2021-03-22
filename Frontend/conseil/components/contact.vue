<template>
  <div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item colortexteBleu paddingTopPage flexCenter"
    >
      <h1>CONTACTEZ-NOUS</h1>
    </div>
    <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mt-5">
      <h2 class="flexCenter colortexteBleu">Notre Magasin</h2>
    </div>
    <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mb-5">
      <h2 class="flexCenter text-secondary">_</h2>
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item flexCenter"
    >
      <p class="col-xl-8 centreTexte text-secondary">
        Bénéficiez de notre point de vente à Maarif, proche du centre-ville de
        CASABLANCA.
      </p>
    </div>

    <div class="flexCenter text-secondary">
      <div class="col-xl-8 mt-5 mobileCarteContact flexAround ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          class="aos-item mobileCarteSizeContact aideAuditiveCarteSize"
        >
          <img
            width="100%"
            height="250px"
            src="../assets/magasin1.png"
            alt=""
          />
          <h5>Magasin</h5>
          <p>
            Audio Conseil <br />
            Rue George sand à Val fleuri <br />
            à côté de la ctm à Casablanca <br />
            Tel: 05 22 98 16 50 <br />
            Mob: 06 00 61 44 37
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          class="aos-item mobileCarteSizeContact aideAuditiveCarteSize"
        >
          <img
            width="100%"
            height="250px"
            src="../assets/magasin2.jpg"
            alt=""
          />
          <h5>Horaire</h5>
          <p>
            Lundi: 10h à 13h / 15h à 18h <br />
            Mardi: 10h à 13h / 15h à 18h <br />
            Mercredi: 10h à 13h / 15h à 18h <br />
            Jeudi: 10h à 13h / 15h à 18h <br />
            Vendredi: 10h à 13h / 15h à 18h <br />
            Samedi: 10h à 13h
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          class="aos-item mobileCarteSizeContact aideAuditiveCarteSize"
        >
          <img
            width="100%"
            height="250px"
            src="../assets/magasin3.jpg"
            alt=""
          />
          <h5>Equipe</h5>
          <p>
            Notre équipe vous accueille en magasin <br />
            Prise de mesures <br />
            Examen auditif sur place <br />
            Prise en charge <br />
            Demandez un rendez-vous <br />
          </p>
        </div>
      </div>
    </div>

    <GmapMap
      :center="{ lat: 33, lng: -5 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        :key="index"
        :position="
          (center = { lat: 33.57704111851915, lng: -7.635868929196996 })
        "
        :clickable="true"
        :draggable="true"
      />
    </GmapMap>
    <div class="mt-5">
      <div id="section-x" class="mt-5">
        <h2
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="aos-item flexCenter colortexteBleu"
        >
          NOUS ECRIRE
        </h2>
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mb-5">
        <h2 class="flexCenter text-secondary">_</h2>
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item">
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./form.vue";
export default {
  name: "contact",
  component: {
    Form
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style></style>
