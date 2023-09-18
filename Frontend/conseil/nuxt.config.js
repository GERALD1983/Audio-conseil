export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  render: {
    static: {
      maxAge: 2592000
    }
  },
  head: {
    title: "Audio Conseil audiologiste audioprothésiste",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Audiologiste spécialiste en surdité examen auditif gratuit, audioprothésiste à Casablanca pour mal-entendants.Nous serons trouver une solutions à vos problémes d'audition,magasin de prothéses auditives"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/icon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/icon.js",
    { src: "~/plugins/google-maps", ssr: true },
    {
      src: "~plugins/aos.js",
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Simple usage
    "@nuxtjs/dotenv",
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // With options
    "vue-scrollto/nuxt",

    // Or if you have custom options...
    ["vue-scrollto/nuxt", { duration: 300 }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  }
};
