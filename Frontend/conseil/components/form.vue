<template>
  <div>
    <b-form
      class="backPartenaire2 pt-5"
      @submit.prevent="submit"
      @reset="onReset"
      v-if="show"
    >
      <div class="flexCenter flex-column-reverse ">
        <b-form-group
          class="col-md-6"
          id="boxC"
          label="Email:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Entrer Email"
            required
            v-model.trim="$v.email.$model"
          ></b-form-input>
          <div
            class="error"
            v-if="!$v.email.required && submitStatus === 'ERROR'"
          >
            Champ requis
          </div>
          <div class="error" v-if="!$v.email.email">
            écrire un email valide ex: marty@hotmail.com
          </div>
          <div class="error" v-if="!$v.email.maxLength">
            .Max 70 nrbs. Merci!
          </div>
        </b-form-group>

        <b-form-group
          class="col-md-6"
          id="boxE"
          label="Votre Nom:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            placeholder="Entrer Nom"
            required
            v-model.trim="$v.nom.$model"
          ></b-form-input>
          <div
            class="error"
            v-if="!$v.nom.required && submitStatus === 'ERROR'"
          >
            Champ requis
          </div>
          <div class="error" v-if="!$v.nom.strongNom">
            Ecrire un nom sans charactére spéciaux .Max 70 letrs. Merci!
          </div>
        </b-form-group>
      </div>
      <div class="flexCenter flex-column-reverse">
        <b-form-group
          class="col-md-6"
          id="boxD"
          label="Message:"
          label-for="input-4"
        >
          <b-form-textarea
            id="input-4"
            v-model.trim="$v.message.$model"
            type="text-area"
            placeholder="Entrer Message"
            required
          ></b-form-textarea>
          <div
            class="error"
            v-if="!$v.message.required && submitStatus === 'ERROR'"
          >
            Champ requis
          </div>
          <div class="error" v-if="!$v.message.strongMessage">
            Ecrire un message sans charactére spéciaux .Max 250 letrs. Merci!
          </div>
        </b-form-group>

        <b-form-group
          class="col-md-6"
          id="boxF"
          label="Votre Téléphone:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model.trim="$v.phone.$model"
            placeholder="Entrer Numéro"
            required
          ></b-form-input>
          <div
            class="error"
            v-if="!$v.phone.required && submitStatus === 'ERROR'"
          >
            Champ requis
          </div>
          <div class="error" v-if="!$v.phone.numeric">
            Ecrire des chiffres sans espace sans charactére spéciaux Merci!
          </div>
          <div class="error" v-if="!$v.phone.maxLength">
            .Max 20 nrbs. Merci!
          </div>
        </b-form-group>
      </div>
      <div class="flexCenter flex-column">
        <div class="mb-3 flexAround col-md-6">
          <b-button id="res" class="btn btn-secondary btnReset" type="reset"
            >Reset</b-button
          >
          <b-button
            id="sub"
            class="btn backColorBleu borderDore btnEnvoyer ombreNav"
            type="submit"
            :disabled="submitStatus === 'PENDING'"
            >ENVOIE</b-button
          >
        </div>
        <div>
          <p class="typo__p" v-if="submitStatus === 'OK'">
            Merci pour votre envoi !
          </p>
          <p class="typo__p" v-if="submitStatus === 'ERROR'">
            Svp Entrez votre formulaire correctement.
          </p>
          <p class="typo__p" v-if="submitStatus === 'ERROR SERVEUR'">
            Erreur Serveur: Chemin Https doit être utilisée pour l'envoi OU
            Serveur HS !
          </p>
          <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>

          <br />
          <br />
        </div>
      </div>
    </b-form>
    <b-card class="mt-3 displayNone" header="Form Data Result">
      <pre class="m-0">{{ email }} <br>
        {{ nom }} <br> {{ message }} <br> {{ phone }} </pre>
    </b-card>
  </div>
</template>

<script>
import { required, email, maxLength, numeric } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "formulaire",
  data() {
    return {
      email: "",
      nom: "",
      message: "",
      phone: "",

      client: [],
      show: true,
      submitStatus: null
    };
  },
  validations: {
    email: { required, email, maxLength: maxLength(70) },
    nom: {
      required,
      strongNom(nom) {
        return (
          /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._-\s]{0,60}$/.test(
            nom
          ) && nom.length <= 70
        );
      }
    },
    message: {
      required,

      strongMessage(message) {
        return (
          // regex espace chiffre lettre seulement
          ///^[a-zA-Z0-9_ ]*$/.test(message) && // checks for a-z

          // regex accepte espace accent sans charactéeres spéciaux
          /^[a-zA-Z0-9'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._-\s]{0,60}$/.test(
            message
          ) && message.length <= 250
        );
      }
    },
    phone: { required, numeric, maxLength: maxLength(20) }
  },
  mounted() {},
  /*
  async created() {
    axios
      .get("")
      .then(response => ((this.client = response.data), console.log(response)))
      .catch(error => console.log(error));
  },
  */
  methods: {
    submit() {
      console.log("requete ver serveur!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        console.log("A echouer informations non complete!");
      } else {
        // do your submit logic here
        console.log("En attente");
        this.submitStatus = "PENDING";

        axios
          .post(process.env.DOMAIN, {
            email: this.email,
            nom: this.nom,
            message: this.message,
            phone: this.phone
          })
          .then(response => {
            (this.submitStatus = "OK"), console.log(response);
            this.$router.push("/");
            alert(
              "Votre message a bien été envoyer avec succés Vous allez être rediriger vers l'accueil"
            );
          })
          .catch(
            error => ((this.submitStatus = "ERROR SERVEUR"), console.log(error))
          );
      }
    },

    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.email, this.nom, this.message, this.phone));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.email = "";
      this.nom = "";
      this.message = "";
      this.phone = "";

      // Trick to reset/clear native browser form validation state
      /*
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
      */
    }
  }
};
</script>
<style>
.btnEnvoyer:hover {
  background-color: #c5ff6d;
  color: #244d78;
}
.ombreNavReset:hover {
  box-shadow: 0 0 0 0 rgb(56, 63, 62);
  animation: pulse 1.3s infinite;
}
.btnReset:hover {
  background-color: rgb(206, 46, 46) !important;
}
</style>
