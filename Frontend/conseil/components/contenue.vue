<template>
  <div>
    <div class="mt-5">
      <h2 class="flexCenter  text-secondary">Présentation</h2>
    </div>
    <div class="mb-5"><h2 class="flexCenter text-secondary">_</h2></div>
    <div class="flexCenter">
      <p class="col-md-8 centreTexte">
        Parce que nous estimons que bien entendre est essentiel pour profiter
        pleinement de la vie, et que l'appareillage auditif suscite de
        nombreuses questions, Arnaud Menger et Agathe Adam souhaitent apporter
        une solution technique et humaine à vos problèmes d'audition.
      </p>
    </div>
    <div class="mt-3 flexCenter">
      <p class="col-md-8 centreTexte">
        Retrouvez-nous autour de Rennes, dans nos magasins de CHANTEPIE,
        CHATEAUGIRON, NOYAL CHATILLON SUR SEICHE, SAINT GREGOIRE et LA
        BOUEXIERE.
      </p>
    </div>
    <div class="mt-5 flexCenter ">
      <button class="btn backColorBleu text-white buttontextSize">
        En savoir plus
      </button>
    </div>
    <div class="backSkill flexCenter mt-5 ">
      <div class=" col-md-8 skillFlex  text-white">
        <div>
          <div class="skillHover cercleSkill">
            <b-icon icon="shop" font-scale="3"></b-icon>
          </div>
          <div class="flexCenter buttontextSize text-secondary">magasin</div>
        </div>
        <div>
          <div class="skillHover cercleSkill ">
            <b-icon icon="person-badge-fill" font-scale="3"></b-icon>
          </div>
          <div class="flexCenter buttontextSize text-secondary">conseil</div>
        </div>
        <div>
          <div class="skillHover cercleSkill ">
            <b-icon icon="telephone-inbound" font-scale="3"></b-icon>
          </div>
          <div class="flexCenter buttontextSize text-secondary">contact</div>
        </div>
        <div>
          <div class="skillHover cercleSkill">
            <b-icon icon="geo-alt" font-scale="3"></b-icon>
          </div>
          <div class="flexCenter buttontextSize text-secondary">proximité</div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h2 class="flexCenter text-secondary">Actualités</h2>
    </div>
    <div class="mb-5"><h2 class="flexCenter text-secondary">_</h2></div>
    <div class="flexCenter">
      <p class="col-md-8 centreTexte">
        Retrouvez régulièrement nos dernières actualités concernant l'audition.
        Nous vous informons tant sur nos offres que sur les innovations et les
        nouveautés dans le domaine de la correction auditive.
      </p>
    </div>
    <div class="mt-5 flexCenter">
      <div class="col-md-8 flexCarte">
        <div class="carte1">
          <div class="pt-3  borderRad ">
            <img
              width="100%"
              height="150px"
              src="../assets/livio.jpg"
              alt="appareil auditif livio Ai"
            />
          </div>

          <div class="bandeauCarte flexCenter text-white">Nouveauté</div>
          <div class="mt-3 text-center">
            Nouveauté 2021 : Les appareils auditifs LIVIO by STARKEY
          </div>
          <div class="flexCenter">
            <button class="mt-3 btn btn-secondary">En savoir plus</button>
          </div>
        </div>
        <div class="carte2">
          <div class="pt-3 borderRad">
            <img
              width="100%"
              height="220px"
              src="../assets/oreillenumerique.jpg"
              alt="appareil auditif livio Ai"
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
              <button class="mt-3 btn btn-secondary">En savoir plus</button>
            </div>
          </div>
        </div>
        <div class="carte3">
          <div class="pt-3 borderRad">
            <img
              width="100%"
              height="300px"
              src="../assets/baladeur.jpg"
              alt="appareil auditif livio Ai"
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
            <button class="mt-3 btn btn-secondary">En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contenue"
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
.carte1 {
  width: 30%;
  height: 350px;
  border: 2px solid greenyellow;
  border-radius: 20px;
  background: white;
}
.carte2 {
  width: 30%;
  height: 500px;
  border: 1px solid greenyellow;
  border-radius: 20px;
  background: white;
}
.carte3 {
  width: 30%;
  height: 700px;
  border: 1px solid greenyellow;
  border-radius: 20px;
  background: white;
}
.backSkill {
  height: 300px;
  background: rgba(173, 255, 47, 0.7);
}
.skillFlex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cercleSkill {
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
