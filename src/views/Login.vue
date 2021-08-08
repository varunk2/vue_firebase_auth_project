<template>
    <div class="container login">
        <div class="row">
            <div class="col-md-12">
                <h1>Login</h1>
                <hr />
                <form @submit.prevent="Login" class="mt-4">
                    <div class="mb-3">
                        <input type="email" class="form-control" id="floatingEmail" placeholder="Email" aria-describedby="emailHelp" v-model="email" />
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary form-control">Login</button>
                </form>
                <p class="mt-4">Need an account?</p><router-link to="/register">Register Here</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'
import firebase from 'firebase';

export default {
    setup() {
        const router = useRouter();
        const email = ref("");
        const password = ref("");

        onBeforeMount(() => {
            const user = firebase.auth().currentUser;
            
            if(user) {
                router.replace('/')
            }
        });

        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => {
                    console.log(data)
                    router.replace('/');
                })
                .catch( err => alert(err.message) );
        }

        return {
            Login,
            email,
            password
        }
    }
}
</script>

<style scoped>
form{
    width:50%;
    margin: auto;
}
</style>