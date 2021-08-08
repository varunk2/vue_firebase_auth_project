<template>
  <div class="home">
    <h1>Welcome, {{ name }}</h1>
    <router-link to="/about">About</router-link>
    <br />
    <button class="mt-4 btn btn-primary logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import firebase from 'firebase';

export default {
  setup() {
    const router = useRouter();
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      
      if(user) {
        name.value = user.email.split('@')[0];
      } else {
        router.replace('/login')
      }
    });

    const Logout = () => {
      console.log("Logout clicked")
      firebase
        .auth()
        .signOut()
        .then(() => {
          router.replace('/login')
        })
        .catch(err => alert(err.message))
    }

    return {
      name,
      Logout
    }
  },
}
</script>