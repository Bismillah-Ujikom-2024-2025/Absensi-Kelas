<template>
    <div class="bg satu">
        <div class="container-fluid">
            <div class="row dua">
                <div class="col-3">
                    <div class="card bg-d">
                        <div class="card-body">
                            <h1 class="text-white text-center my-4 JudulLogin">Login</h1>
                            <form @submit.prevent="login">
                                <div class="form-group mb-5 mt-5">
                                    <input v-model="email" class="form-control form-control-lg lima" type="email" placeholder="Masukkan email" />
                                </div>
                                <div class="form-group mb-5">
                                    <input v-model="password" class="form-control form-control-lg lima" type="password" placeholder="Masukkan Password" />
                                </div>
                                <div class="d-grid gap-2 mb-5 tiga">
                                    <button type="submit" class="btn btn-warning btn-lg text-white empat">Masuk</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import auth from '~/middleware/auth';

definePageMeta({
    layout: 'login',
    middleware: auth
    }    
)

let supabase = useSupabaseClient()
let email = ref()
let password = ref()

async function login() {
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    if(data) {
        console.log(data)
        navigateTo('/absensi')
    }
}
</script>

<style scoped>

.bg {
    width: 100vw;
    height: 100vh;
    background: #E5B844 url('~/assets/img/bg-login.png') no-repeat center center fixed;
    background-size: 45%;
}
.card.bg-d {
    background-color: #5e5c5ce8
}

.card {
    border-radius: 10px;
}

.btn-warning {
    background-color: #E5B844 !important;
}

.form-control {
    background-color: #c0b9b9e2;
}

::placeholder {
  color: #fff;
}
.satu{
    display: flex;
    justify-content: center;
    align-items: center;
}
.dua{
    display: flex;
    justify-content: center;
    align-items: center;
}
.JudulLogin{
    padding-top: 5%;
    padding-bottom: 5%;
    font-size: 50px;
    font-family: 'Times New Roman', Times, serif;
}
.empat{
    font-size: 25px;
}
.lima{
    font-family: 'Times New Roman', Times, serif;
}
input{
    color: white;
    outline: none;
}
input:focus{
    color: white;
    outline: none;
}
.btn{
    text-decoration: none; 
    border: none; 
    padding: 12px 40px; 
    font-size: 16px; 
    background-color: green; 
    color: #fff; 
    border-radius: 5px; 
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24); 
    cursor: pointer; 
    outline: none; 
    transition: 0.2s all;
}
.btn:active { 
    transform: scale(0.98); 
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24); 
} 
</style>