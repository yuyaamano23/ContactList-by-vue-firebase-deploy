import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'


Vue.config.productionTip = false


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEeUyPXEpYzldGVKk98YsuDFWQyyTsafo",
  authDomain: "my-address-pj-practice.firebaseapp.com",
  databaseURL: "https://my-address-pj-practice.firebaseio.com",
  projectId: "my-address-pj-practice",
  storageBucket: "my-address-pj-practice.appspot.com",
  messagingSenderId: "607587057576",
  appId: "1:607587057576:web:d85efbdb1733a0a854279d",
  measurementId: "G-TNR1LG6VV6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
