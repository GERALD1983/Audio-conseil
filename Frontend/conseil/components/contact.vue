<template>
  <div>
    <div class="colortexteBleu paddingTopPage flexCenter">
      <h1>CONTACTEZ-NOUS</h1>
    </div>
    <div class="mt-5">
      <h2 class="flexCenter colortexteBleu">Notre Magasin</h2>
    </div>
    <div class="mb-5"><h2 class="flexCenter text-secondary">_</h2></div>
    <div class="flexCenter">
      <p class="col-md-8 centreTexte text-secondary">
        Bénéficiez de notre point de vente à Maarif, proche du centre-ville de
        CASABLANCA.
      </p>
    </div>

    <div class="flexCenter text-secondary">
      <div class="col-md-8 mt-5 flexAround ">
        <div class="aideAuditiveCarteSize">
          <img
            width="100%"
            height="250px"
            src="../assets/magasin1.png"
            alt=""
          />
          <h5>Contour à écouteur déporté (RIC)</h5>
          <p>
            Destiné aux pertes faibles à sévères <br />
            Facile à manipuler <br />
            Fiabilité dans le temps <br />
            Esthétique et quasi invisible pour certains
          </p>
        </div>
        <div class="aideAuditiveCarteSize">
          <img
            width="100%"
            height="250px"
            src="../assets/magasin2.jpg"
            alt=""
          />
          <h5>Intra-auriculaire</h5>
          <p>
            Destiné aux pertes faibles à moyennes <br />
            Plus compliqué à manipuler <br />
            Esthétique ou quasi invisible pour certains <br />
            Moins grande autonomie
          </p>
        </div>
        <div class="aideAuditiveCarteSize">
          <img
            width="100%"
            height="250px"
            src="../assets/magasin3.jpg"
            alt=""
          />
          <h5>Contour d'oreille</h5>
          <p>
            Destiné aux pertes faibles à profondes <br />
            Facile à manipuler <br />
            Fiabilité dans le temps <br />
            Plus grande autonomie <br />
          </p>
        </div>
      </div>
    </div>

    <div>
      <img id="carteGoogle" width="100%" src="../assets/carte.jpg" alt="" />
    </div>
    <div class="mt-5">
      <div id="section-x" class="mt-5">
        <h2 class="flexCenter colortexteBleu">NOUS ECRIRE</h2>
      </div>
      <div class="mb-5"><h2 class="flexCenter text-secondary">_</h2></div>
      <div><Form /></div>
    </div>
  </div>
</template>

<script>
import Form from "./form.vue";
export default {
  name: "contact",
  component: {
    Form
  }
};
</script>

<style></style>
