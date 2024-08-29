<template>
    <div class="bg satu">
        <div class="container-fluid">
            <div class="row dua">
                <div class="col-3">
                    <div class="card bg-d">
                        <div class="card-body">
                            <h1 class="text-white text-center my-4 tiga">Login</h1>
                            <form>
                                <div class="form-group mb-5 mt-5">
                                    <input class="form-control form-control-lg lima" type="email" placeholder="Masukkan email" />
                                </div>
                                <div class="form-group mb-5">
                                    <input class="form-control form-control-lg lima" type="password" placeholder="Masukkan Password" />
                                </div>
                                <div class="d-grid gap-2 mb-5 tiga">
                                    <button class="btn btn-warning btn-lg text-white empat">Masuk</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scope>
    definePageMeta({
        layout: 'login'
        }      
    )
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
.tiga{
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
</style>