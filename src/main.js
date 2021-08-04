import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDc91jhCqi9Levn-TqI02sNDfY9DWSy1h8",
    authDomain: "vue-auth-project-d91ae.firebaseapp.com",
    projectId: "vue-auth-project-d91ae",
    storageBucket: "vue-auth-project-d91ae.appspot.com",
    messagingSenderId: "34945054604",
    appId: "1:34945054604:web:bffa9a28a5b513c4a688a9"
};

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
