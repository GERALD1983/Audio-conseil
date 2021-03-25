<template>
  <div>
    <div class="mt-5">
      <h2
        data-aos="zoom-in"
        data-aos-duration="2000"
        class="aos-item flexCenter colortexteBleu"
      >
        Présentation
      </h2>
    </div>
    <div class="mb-5"><h2 class="flexCenter text-secondary">_</h2></div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item flexCenter text-secondary "
    >
      <p class="col-lg-8 centreTexte">
        Parce que nous estimons que
        <strong>Bien entendre est essentiel </strong> pour profiter pleinement
        de la vie, et que l'appareillage auditif suscite de nombreuses
        questions, Votre
        <strong> Audioprothésiste Ali Ahanguir </strong> souhaite apporter une
        solution technique et humaine à vos problèmes d'audition.
      </p>
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item mt-3 flexCenter text-secondary"
    >
      <p class="col-lg-8 centreTexte">
        Retrouvez-nous autour de <strong> VAL FLEURI </strong>, dans notre
        magasin à <strong>CASABLANCA </strong>, spécialiste en
        <strong> AUDITION </strong>,<strong> AUDIOPROTHESE </strong> ,<strong
          >MAL-ENTENDANT
        </strong>
        ,<strong> SURDITE </strong>, <strong> PROBLEMES D'AUDITION </strong>.
      </p>
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item mt-5 flexCenter "
    >
      <NuxtLink
        class="btn borderDore backColorBleu text-white buttontextSize"
        to="/Solutions"
        >En savoir plus</NuxtLink
      >
    </div>
    <div class="mobileBackSkill backSkill flexCenter mt-5 ">
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        class="aos-item col-lg-8 mobileSkillFlex skillFlex  text-white"
      >
        <div>
          <NuxtLink to="/Contact">
            <div class="skillHover cercleSkill">
              <b-icon
                class="text-secondary"
                icon="shop"
                font-scale="3"
              ></b-icon>
            </div>
          </NuxtLink>

          <div class="mt-3 flexCenter buttontextSize text-secondary">
            Magasin
          </div>
        </div>
        <div class="mobileMargSkill">
          <NuxtLink to="/Solutions">
            <div class="skillHover cercleSkill ">
              <b-icon
                class="text-secondary"
                icon="person-badge-fill"
                font-scale="3"
              ></b-icon>
            </div>
          </NuxtLink>

          <div class="mt-3 flexCenter buttontextSize text-secondary">
            Conseil
          </div>
        </div>
        <div class="mobileMargSkill">
          <NuxtLink
            :to="{ path: '/Contact', hash: 'section-x' }"
            v-scroll-to="{ el: '#section-x' }"
          >
            <div class="skillHover cercleSkill ">
              <b-icon
                class="text-secondary"
                icon="telephone-inbound"
                font-scale="3"
              ></b-icon>
            </div>
          </NuxtLink>
          <div class="mt-3 flexCenter buttontextSize text-secondary">
            Contact
          </div>
        </div>
        <div class="mobileMargSkill">
          <div @click="toProximite" class="skillHover cercleSkill">
            <b-icon
              class="text-secondary"
              icon="geo-alt"
              font-scale="3"
            ></b-icon>
          </div>
          <div class="mt-3 flexCenter buttontextSize text-secondary">
            Proximité
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h2
        data-aos="zoom-in"
        data-aos-duration="2000"
        class="aos-item flexCenter colortexteBleu"
      >
        Actualités
      </h2>
    </div>
    <div data-aos="zoom-in" data-aos-duration="2000" class="aos-item mb-5">
      <h2 class="flexCenter text-secondary">_</h2>
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item flexCenter"
    >
      <p class="col-lg-8 centreTexte text-secondary">
        Retrouvez régulièrement nos dernières actualités concernant l'audition.
        Nous vous informons tant sur nos offres que sur les innovations et les
        nouveautés dans le domaine de la correction auditive.
      </p>
    </div>
    <div class="mt-5 flexCenter ">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        class="aos-item col-xl-10 mobileFlexCarte flexCarte flex-wrap"
      >
        <div class="mobileCarte carte1">
          <div class="pt-3  borderRad ">
            <img
              width="295px"
              height="150px"
              src="../assets/livioMini.jpg"
              alt="appareil auditif livio Ai"
            />
          </div>

          <div class="bandeauCarte flexCenter text-white">Nouveauté</div>
          <div class="mt-3 text-center">
            Nouveauté 2021 : Les appareils auditifs LIVIO by STARKEY
          </div>
          <div class="flexCenter">
            <NuxtLink
              :to="{ path: '/Actualites', hash: 'livio' }"
              v-scroll-to="{ el: '#livio' }"
            >
              <button class="mt-3 btn borderDore buttonCarte">
                Plus de détails
              </button>
            </NuxtLink>
          </div>
        </div>
        <div class=" mobileMargCarte mobileCarte carte2">
          <div class="pt-3 borderRad">
            <img
              width="295px"
              height="220px"
              src="../assets/oreilleNumeriqueMini.jpg"
              alt="photo oreille numérique image intérieur oreille"
            />
          </div>
          <div class="bandeauCarte flexCenter text-white">Dossier</div>
          <div class="bg-white">
            <div class="mt-3 text-center">
              Dossier : l'oreille, ce capteur numérique. L'audition repose sur
              un processus encore bien mystérieux. Les réponses dans notre
              dossier consacré à l'oreille numérique.
            </div>
            <div class="flexCenter">
              <NuxtLink
                :to="{ path: '/Actualites', hash: 'oreilleNumerique' }"
                v-scroll-to="{ el: '#oreilleNumerique' }"
              >
                <button class="mt-3 btn borderDore buttonCarte">
                  Plus de détails
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="mobileCarte carte3">
          <div class="pt-3 borderRad">
            <img
              width="295px"
              height="300px"
              src="../assets/baladMini.jpg"
              alt="photo nuisance des baladeurs et des casques sur les oreilles, nuisances sonores"
            />
          </div>
          <div class="bandeauCarte flexCenter text-white">Prévention</div>
          <div class="mt-3 text-center">
            Les baladeurs MP3, fléau de l'audition: Si l'on est conscient des
            nuisances sonores sur le lieu de travail ou dans les transports, une
            nouvelle étude montre les effets plus surprenants des MP3 et autres
            baladeurs audio sur notre audition. Vacarme citadin des transports
            en commun et baladeurs MP3 engendrent à eux deux des nuisances chez
            près de 90 % des New-Yorkais.
          </div>
          <div class="flexCenter">
            <NuxtLink
              :to="{ path: '/Actualites', hash: 'baladeurMp3' }"
              v-scroll-to="{ el: '#baladeurMp3' }"
            >
              <button class="mt-3 btn borderDore buttonCarte">
                Plus de détails
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item mt-5 mb-5 flexCenter "
    >
      <NuxtLink
        class="btn borderDore backColorBleu text-white buttontextSize"
        to="/Actualites"
        >Toutes les actualités</NuxtLink
      >
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="aos-item pt-5 backPartenaire2 text-secondary"
    >
      <div class="">
        <h2 class="flexCenter colortexteBleu">Nos partenariats</h2>
      </div>
      <div class="mb-5"><h2 class="flexCenter">_</h2></div>
      <div class="flexCenter ">
        <p class="col-lg-8 centreTexte">
          Spécialistes de la correction auditive, nous travaillons en étroite
          collaboration avec des professionnels de santé. Le médecin O.R.L. est
          notre partenaire privilégié. Il est le seul habilité à diagnostiquer
          votre perte auditive, et à prescrire une correction auditive. Nous
          pouvons être amenés à échanger également avec votre médecin
          généraliste, votre orthophoniste, etc.
        </p>
      </div>
      <div class="mt-1">
        <h3 class="flexCenter">Mutuelles</h3>
      </div>
      <div class="mt-3 pb-5 flexCenter">
        <p class="col-lg-8 centreTexte">
          La prise en charge par les mutuelles est très variable car elle dépend
          des conditions spécifiées dans votre contrat. Grace aux nombreux
          partenariats mis en place avec les réseaux de santé des mutuelles,
          nous vous assurons une tarification contrôlée, un protocole rigoureux,
          ainsi qu’un accès simplifié à vos remboursements. Nous vous faisons
          bénéficier du tiers payant et nous chargeons de toutes les démarches
          nécessaires auprès de vos caisses, afin de vous éviter les avances de
          frais.
        </p>
      </div>
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      id="proximite"
      class="aos-item mt-5 mb-5 flexCenter "
    >
      <NuxtLink
        class="btn borderDore backColorBleu text-white buttontextSize"
        to="/Contact"
        >Contactez-nous</NuxtLink
      >
    </div>
  </div>
</template>

<script>
import jump from "jump.js";
export default {
  name: "contenue",
  methods: {
    toProximite() {
      //
      // window.scrollTo(0, 400);
      jump("#proximite", {
        duration: 1000,
        callback: () => console.log("Saut terminé!")
      });
    }
  }
};
</script>

<style>
.borderRad {
  border-radius: 20px;
  background-color: #244d78;
}
.bandeauCarte {
  width: 100%;
  height: 50px;
  background: #244d78;
}
.flexCarte {
  display: flex;
  justify-content: space-around;
}
.buttonCarte {
  background-color: #244d78;
  color: white;
}
.buttonCarte:hover {
  background-color: #fdb813;
  color: white;
}
.carte1 {
  width: 299px;
  height: 400px;
  border: 2px solid #244d78;
  border-radius: 20px;
  background: white;
}
.carte2 {
  width: 299px;
  height: 550px;
  border: 2px solid #244d78;
  border-radius: 20px;
  background: white;
}
.carte3 {
  width: 299px;
  height: 750px;
  border: 2px solid #244d78;
  border-radius: 20px;
  background: white;
}
.backSkill {
  height: 300px;
  background: rgba(173, 255, 47, 0.7);
}
.backPartenaire {
  height: auto;
  background: rgba(173, 255, 47, 0.7);
}
.backPartenaire2 {
  height: auto;
  background-color: rgba(199, 195, 195, 0.3);
}
.skillFlex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cercleSkill {
  width: 100px;
  height: 100px;
  padding: 1.5em;
  border: 0.2em solid white;
  border-radius: 50%;
}
.skillHover:hover {
  background-color: white;
  color: gray;
  cursor: pointer;
}
</style>
