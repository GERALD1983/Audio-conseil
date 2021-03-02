<template>
  <div>
    <div class="backFoot flexFootGlobal colorTextFoot">
      <div class="flexFoot">
        <div class="flexFootColone tailleColone">
          <div class="mt-2 footLogoSize">
            <img
              width="150px"
              height="80px"
              src="../assets/starkey.jpg"
              alt="logo audio-conseil"
            />
          </div>
          <button class="btn colorTextFoot">
            Nous suivre sur Facebook
            <div class=" ">
              <b-icon icon="facebook" font-scale="2"></b-icon>
            </div>
          </button>
        </div>
        <div class="flexFootColone tailleColone">
          <div><h4>Nos services</h4></div>
          <div>
            <p>
              Bilan auditif gratuit non médical <br />
              Essai de l'appareillage gratuit sur prescription médicale <br />
              Facilités de paiement <br />
              Garantie panne de 4 ans <br />
              Assurance perte, vol, casse de 4 ans <br />
            </p>
          </div>
        </div>
        <div class="flexFootColone tailleColone">
          <div><h4>Notre point de vente</h4></div>
          <div><p>Trouvez votre magasin à Casablanca</p></div>
          <div class="my-1 flexCenter ">
            <button
              class="flexCenter btn backColorBleu borderButtonfoot colorTextFoot"
            >
              <div class=" ">
                <b-icon icon="geo-alt" font-scale="2"></b-icon>
              </div>
              Découvrez notre point de vente
            </button>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div class="text-center">
          <div class=" ">
            <b-icon icon="house-door" font-scale="1.5"></b-icon>
          </div>
          2021 Copyright Audio Conseil - Conception: GF-Tech - Adresse :
          quartier val fleuri rue george sand, 20390 Casablanca Tel: 0522222222
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot"
};
</script>

<style>
.borderButtonfoot {
  border: 2px solid #fdb813;
}
.colorTextFoot {
  color: white;
}
.backFoot {
  background-color: #244d78;
  height: 400px;
}
.flexFoot {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.flexFootGlobal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flexFootColone {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.footLogoSize {
  height: 100px;
  width: 100px;
}
.tailleColone {
  height: 200px;
  width: 20%;
}
</style>
