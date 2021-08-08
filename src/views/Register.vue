<template>
    <div class="container register">
        <div class="row">
            <div class="col-md-12">
                <h1>Register</h1>
                <hr />
                <form @submit.prevent="Register" class="mt-4">
                    <div class="mb-3">
                        <input type="email" class="form-control" id="floatingEmail" placeholder="Email" aria-describedby="emailHelp" v-model="email" />
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary form-control">Register</button>
                </form>
                <p class="mt-4">Need an account?</p><router-link to="/login">Login Here</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import firebase from 'firebase';

export default {
    setup() {
        const router = useRouter();
        const email = ref("");
        const password = ref("");

        onBeforeMount(() => {
            const user = firebase.auth().currentUser;

            if(user){
                router.replace('/')
            } else {
                router.replace('/register')
            }
        })

        const Register = () => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(user => {
                    router.replace('/')

                })
                .catch(err => alert(err.message))
        }

        return {
            Register,
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