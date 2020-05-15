// Vue
import "vue";
import "vue-tables-2";

// Register Namespace

import VueI18n from "vue-i18n";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(VueI18n);

const messages = window.jstranslations || {};

window.vuei18nmessages = new VueI18n({
  locale: window.weblanguage, // set locale
  fallbackLocale: "en",
  messages // set locale messages
});

import "d3";
import "c3";
