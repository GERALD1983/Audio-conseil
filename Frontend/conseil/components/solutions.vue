<template>
  <div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item colortexteBleu paddingTopPage flexCenter"
    >
      <h1>NOS SOLUTIONS</h1>
    </div>
    <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mt-5">
      <h2 class="flexCenter colortexteBleu">Aides auditives</h2>
    </div>
    <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mb-5">
      <h2 class="flexCenter text-secondary">_</h2>
    </div>
    <div class="flexCenter">
      <p
        data-aos="zoom-in"
        data-aos-duration="2000"
        class="aos-item col-xl-8 centreTexte text-secondary"
      >
        Seul l'audioprothésiste pourra vous conseiller sur la solution adaptée à
        vos besoins après avoir fait un bilan avec vous. Il pourra ainsi vous
        diriger vers des intra-auriculaires, des contours d'oreilles, ou des
        mini contours d'oreilles.
      </p>
    </div>

    <div class="flexCenter text-secondary">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        class="aos-item col-xl-8 mt-5 mobileCarteSolutions flexAround flex-wrap"
      >
        <div class="mobileCarteSizeSolutions aideAuditiveCarteSize">
          <img
            width="295px"
            height="250px"
            src="../assets/lunette.jpg"
            alt="image appareil auditif contour à écouteur déporté (RIC) "
          />
          <h5>Contour à écouteur déporté (RIC)</h5>
          <p>
            Destiné aux pertes faibles à sévères <br />
            Facile à manipuler <br />
            Fiabilité dans le temps <br />
            Esthétique et quasi invisible pour certains
          </p>
        </div>
        <div class="mobileCarteSizeSolutions aideAuditiveCarteSize">
          <img
            width="295px"
            height="250px"
            src="../assets/table.jpg"
            alt="photo prothése auditive à écouteur intra-auriculaire"
          />
          <h5>Intra-auriculaire</h5>
          <p>
            Destiné aux pertes faibles à moyennes <br />
            Plus compliqué à manipuler <br />
            Esthétique ou quasi invisible pour certains <br />
            Moins grande autonomie
          </p>
        </div>
        <div class="mobileCarteSizeSolutions aideAuditiveCarteSize">
          <img
            width="295px"
            height="250px"
            src="../assets/contourOreille.jpg"
            alt="image appreil d'audition à contour d'oreille"
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

    <div class=" mobileBackGammes backGammes mt-5 pb-5 ">
      <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mt-5">
        <h2 class="pt-5 flexCenter colortexteBleu">Gammes</h2>
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mb-5">
        <h2 class="flexCenter text-secondary">_</h2>
      </div>
      <div class="flexCenter">
        <p
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="aos-item pb-3 col-xl-8 centreTexte"
        >
          En fonction de votre perte auditive, votre style de vie et vos
          activités déterminent le niveau de performance de traitement de
          l'information nécessaire pour améliorer l'écoute dans tous les moments
          de votre vie quotidienne.
        </p>
      </div>
      <div class="flexCenter textColorGamme">
        <div class="col-xl-8">
          <div>
            <div
              id="display1"
              class="displayNone margSizeText margSizeTextMobile margA margMobile1200"
            >
              <div class="ecoText ecoTextMobile">
                <p class="text-center">
                  <strong>Style de vie très calme</strong>, <br />
                  recommandé pour des personnes évoluant dans des environnements
                  très calmes. Idéal pour des
                  <strong
                    >discussions en face à face, à la maison, ou pour regarder
                    la télévision</strong
                  >.
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-in-right"
              data-aos-duration="2000"
              class="aos-item flexBetween mt-3 px-3 mobileEco eco"
            >
              <div id="titreEco">Economiques</div>
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                @mouseenter="clickAppear1"
                @mouseleave="clickAppear1"
                class="aos-item pointerImgFooter ombreNav"
              >
                <b-icon icon="patch-plus-fill" font-scale="1.5"></b-icon>
              </div>
            </div>
          </div>
          <div>
            <div
              id="display2"
              class="displayNone margSizeText margSizeTextMobile margB margMobile1200"
            >
              <div class="ecoText ecoTextMobile">
                <p class="text-center">
                  <strong>Style de vie calme</strong>, <br />
                  recommandé pour des personnes évoluant rarement dans des
                  environnements bruyants. Idéal<strong>
                    à la maison, mais aussi pour des conversations ou réunions
                    de travail</strong
                  >.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-right"
              data-aos-duration="2000"
              class="aos-item flexBetween mt-3 px-3 mobileBasique basique"
            >
              <div>Basique</div>
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                @mouseenter="clickAppear2"
                @mouseleave="clickAppear2"
                class="aos-item pointerImgFooter ombreNav"
              >
                <b-icon icon="patch-plus-fill" font-scale="1.5"></b-icon>
              </div>
            </div>
          </div>
          <div>
            <div
              id="display3"
              class="displayNone margSizeText margSizeTextMobile margC margMobile1200"
            >
              <div class="ecoText ecoTextMobile">
                <p class="text-center">
                  <strong>Style de vie active</strong>, <br />
                  recommandé pour des personnes évoluant de temps en temps dans
                  des environnements bruyants. Idéal pour améliorer une
                  <strong
                    >activité en plein air, ou dans les magasins type centres
                    commerciaux</strong
                  >.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-right"
              data-aos-duration="2000"
              class="aos-item flexBetween mt-3 px-3 mobileConfort confort"
            >
              <div>Confort</div>
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                @mouseenter="clickAppear3"
                @mouseleave="clickAppear3"
                class="aos-item pointerImgFooter ombreNav"
              >
                <b-icon icon="patch-plus-fill" font-scale="1.5"></b-icon>
              </div>
            </div>
          </div>
          <div>
            <div
              id="display4"
              class="displayNone margSizeText margSizeTextMobile margD margMobile1200"
            >
              <div class="ecoText ecoTextMobile">
                <p class="text-center">
                  <strong>Style de vie dynamique</strong>, <br />
                  recommandé pour des personnes actives évoluant régulièrement
                  dans des environnements bruyants et multiples. Idéal pour être
                  à l'aise dans des
                  <strong
                    >salles de spectacle, au restaurant, en voiture, ou si l'on
                    est confronté à des bruits de machine</strong
                  >.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-right"
              data-aos-duration="2000"
              class="aos-item flexBetween mt-3 px-3 mobileAvance avance"
            >
              <div>Avancé</div>
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                @mouseenter="clickAppear4"
                @mouseleave="clickAppear4"
                class="aos-item pointerImgFooter ombreNav"
              >
                <b-icon icon="patch-plus-fill" font-scale="1.5"></b-icon>
              </div>
            </div>
          </div>
          <div>
            <div
              id="display5"
              class="displayNone margSizeText margSizeTextMobile margE margMobile1200"
            >
              <div class="ecoText ecoTextMobile">
                <p class="text-center">
                  <strong>Style de vie intense</strong>, <br />
                  recommandé pour des personnes très actives évoluant
                  fréquemment dans des environnements très bruyants et
                  complexes. Idéal pour être à l'aise
                  <strong
                    >en voiture, dans des soirées, cinéma, ou au milieu de la
                    foule, et même optimiser l'écoute des sons</strong
                  >.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-right"
              data-aos-duration="2000"
              class="aos-item flexBetween mt-3 px-3 mobilePremium premium"
            >
              <div>Premium</div>
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                @mouseenter="clickAppear5"
                @mouseleave="clickAppear5"
                class="aos-item pointerImgFooter ombreNav"
              >
                <b-icon icon="patch-plus-fill" font-scale="1.5"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mt-5">
      <h2 class="flexCenter colortexteBleu">Accessoires</h2>
    </div>
    <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mb-5">
      <h2 class="flexCenter text-secondary">_</h2>
    </div>
    <div class="flexCenter">
      <p
        data-aos="zoom-in"
        data-aos-duration="2000"
        class="aos-item col-xl-8 centreTexte text-secondary"
      >
        Que vous soyez équipés d'aides auditives ou non, AUDIO CONSEIL a
        sélectionné pour vous une gamme complète d'accessoires d'aide à la
        communication.
      </p>
    </div>
    <div class="flexCenter">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        class="aos-item col-xl-8 mt-5 mobileCarteSolutions flexAround flex-wrap text-secondary "
      >
        <div class="mobileCarteSizeSolutions aideAuditiveCarteSize">
          <img
            width="295px"
            height="250px"
            src="../assets/chargeur.jpg"
            alt="image chargeur pour les prothéses d'auditions starkey rechargeable"
          />
          <h5>Chargeur</h5>
          <p>
            Grâce aux évolutions technologiques, le développement des aides
            auditives rechargeables devient de plus en plus important.
          </p>
        </div>
        <div class="mobileCarteSizeSolutions aideAuditiveCarteSize">
          <img
            width="295px"
            height="250px"
            src="../assets/pile1.jpg"
            alt="photo pile de rechange pour les appareils d'auditions , boite de piles prothése auditive"
          />
          <h5>Piles</h5>
          <p>
            Votre prothèse auditive a besoin de piles adaptées et de qualité
            pour fonctionner correctement. Un changement infime de puissance...
          </p>
        </div>
        <div class="mobileCarteSizeSolutions aideAuditiveCarteSize">
          <img
            width="295px"
            height="250px"
            src="../assets/nettoyant.png"
            alt="image produit de nettoyage prothése auditive , entretien appareil auditif"
          />
          <h5>Produits d'entretien</h5>
          <p>
            Quelle que soit votre solution auditive, il est essentiel d’en
            effectuer le nettoyage quotidien. Vous éviterez ainsi d’éventuelles
            pannes ...
          </p>
        </div>
        <div class="mobileCarteSizeSolutions aideAuditiveCarteSize">
          <img
            width="295px"
            height="250px"
            src="../assets/portable.jpg"
            alt="photo prothése equiper pour les téléphones portables et les mp3,
             appareils auditif relier aux appareils numériques"
          />
          <h5>Communications</h5>
          <p>
            La technologie évolue, il est désormais possible de recevoir
            directement dans vos aides auditives, votre téléphone portable,
            votre lecteur MP3 ...
          </p>
        </div>
      </div>
    </div>

    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item pt-5 backPartenaire text-secondary"
    >
      <div class="">
        <h2 class="flexCenter colortexteBleu">Protections</h2>
      </div>
      <div class="mb-3"><h2 class="flexCenter">_</h2></div>
      <div class="flexCenter ">
        <p class="col-xl-8 centreTexte">
          Nous avons également sélectionné pour vous toute une gamme de
          protections auditives afin de préserver vos oreilles des agressions
          extérieures et ainsi conserver votre capital auditif le plus longtemps
          possible
        </p>
      </div>
      <div class="flexCenter mt-5 pb-5">
        <div class="mobileSkillFlex flexAround col-xl-8">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            class="aos-item flexCenter skillColumn"
          >
            <NuxtLink
              :to="{ path: '/Protections', hash: 'ancreBaignade' }"
              v-scroll-to="{ el: '#ancreBaignade' }"
            >
              <div class="skillHover cercleSkill">
                <b-icon
                  class="text-secondary"
                  icon="life-preserver"
                  font-scale="3"
                ></b-icon>
              </div>
            </NuxtLink>
            <div class="flexCenter buttontextSize text-secondary">Baignade</div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            class="aos-item mobileMargProtect flexCenter skillColumn"
          >
            <NuxtLink
              :to="{ path: '/Protections', hash: 'ancreNuisance' }"
              v-scroll-to="{ el: '#ancreNuisance' }"
            >
              <div class="skillHover cercleSkill">
                <b-icon
                  class="text-secondary"
                  icon="headphones"
                  font-scale="3"
                ></b-icon>
              </div>
            </NuxtLink>
            <div class="flexCenter buttontextSize text-secondary">Nuisance</div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            class="aos-item flexCenter skillColumn"
          >
            <NuxtLink
              :to="{ path: '/Protections', hash: 'ancreSommeil' }"
              v-scroll-to="{ el: '#ancreSommeil' }"
            >
              <div class="skillHover cercleSkill">
                <b-icon
                  class="text-secondary"
                  icon="alarm"
                  font-scale="3"
                ></b-icon>
              </div>
            </NuxtLink>
            <div class="flexCenter buttontextSize text-secondary">Sommeil</div>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mt-5">
      <h2 class="flexCenter  colortexteBleu">Notre Marque</h2>
    </div>
    <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mb-5">
      <h2 class="flexCenter text-secondary">_</h2>
    </div>
    <div class="flexCenter">
      <p
        data-aos="zoom-in"
        data-aos-duration="2000"
        class="aos-item col-xl-8 centreTexte text-secondary"
      >
        AUDIO CONSEIL étant une enseigne indépendante, nous sommes libres de
        vous proposer les meilleurs produits sélectionnés parmi la plus grande
        marque du marché. Votre satisfaction étant notre objectif, nous tenons
        particulièrement à répondre à vos besoins.
      </p>
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item flexCenter"
    >
      <img
        class="mobileimgStarkey"
        width="665px"
        src="../assets/starkey2.jpg"
        alt="logo prothése auditive marque starkey audition mieux entendre mieux vivre"
      />
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item my-5 flexCenter "
    >
      <NuxtLink
        :to="{ path: '/Contact', hash: 'section-x' }"
        v-scroll-to="{ el: '#section-x' }"
      >
        <button
          class=" borderButtonfoot btn backColorBleu text-white buttontextSize"
        >
          Prendre rendez-vous
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "solutions",
  mounted() {
    const eco = document.getElementById("titreEco");
    if (window.innerWidth < 400) {
      eco.innerHTML = "Eco";
    }
  },
  methods: {
    clickAppear1() {
      let display1 = document.getElementById("display1");

      if (display1.style.display == "none" || display1.style.display == "") {
        display1.style.display = "block";
      } else {
        display1.style.display = "none";
      }
    },
    clickAppear2() {
      let display2 = document.getElementById("display2");

      if (display2.style.display == "none" || display2.style.display == "") {
        display2.style.display = "block";
      } else {
        display2.style.display = "none";
      }
    },
    clickAppear3() {
      let display3 = document.getElementById("display3");

      if (display3.style.display == "none" || display3.style.display == "") {
        display3.style.display = "block";
      } else {
        display3.style.display = "none";
      }
    },
    clickAppear4() {
      let display4 = document.getElementById("display4");

      if (display4.style.display == "none" || display4.style.display == "") {
        display4.style.display = "block";
      } else {
        display4.style.display = "none";
      }
    },
    clickAppear5() {
      let display5 = document.getElementById("display5");

      if (display5.style.display == "none" || display5.style.display == "") {
        display5.style.display = "block";
      } else {
        display5.style.display = "none";
      }
    }
  }
};
</script>

<style>
.displayNone {
  display: none;
}
.displayNone:hover {
  display: block;
}

.margA {
  padding-left: 9.5%;
}
.margB {
  padding-left: 19%;
}
.margC {
  padding-left: 29%;
}
.margD {
  padding-left: 48.5%;
}
.margE {
  padding-left: 67.5%;
}
.margSizeText {
  position: absolute;
  width: 100%;
  margin-top: -300px;
}
.skillColumn {
  flex-direction: column;
}
.textColorGamme {
  font-size: 20px;
  font-weight: 900;
  color: grey;
}
.eco {
  width: 30%;
  height: 70px;
  background-color: rgb(230, 253, 194);
}
.ecoText {
  width: 20em;
  height: 300px;
  background-color: white;
  border: 5px solid #fdb813;
  border-radius: 1em;
}
.basique {
  width: 40%;
  height: 70px;
  background-color: rgb(189, 233, 123);
}
.confort {
  width: 50%;
  height: 70px;
  background-color: rgb(172, 233, 80);
}
.avance {
  width: 70%;
  height: 70px;
  background-color: rgb(139, 204, 43);
}
.premium {
  width: 90%;
  height: 70px;
  background-color: rgba(97, 161, 1, 0.7);
}
.aideAuditiveCarteSize {
  width: 295px;
  height: 500px;
}
.backGammes {
  background-color: rgba(199, 195, 195, 0.3);
  height: 730px;
}
</style>
