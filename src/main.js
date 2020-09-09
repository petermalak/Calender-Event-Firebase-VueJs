import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC5BClpeAgL2b-FQII18G9YlZV__dqJ9q8",
  authDomain: "vue-calender-2b55f.firebaseapp.com",
  databaseURL: "https://vue-calender-2b55f.firebaseio.com",
  projectId: "vue-calender-2b55f",
  storageBucket: "vue-calender-2b55f.appspot.com",
  messagingSenderId: "600117693295",
  appId: "1:600117693295:web:63107505600cba35e3b69a"

})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
