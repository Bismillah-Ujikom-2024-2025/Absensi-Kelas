<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col mt-3 text-center">
        <h1>PROFILE</h1>
      </div>
    </div>
    <div class="Kolom">
      <div class="rounded-5 d-flex flex-column align-items-center justify-content-evenly tinggi">
        <div class="profil img-thumbnail">
          <img src="/assets/img/Sabila.jpeg" alt="">
        </div>
        <div class="rounded-5 KolomEmail">
          <p class="TextEmail">222310206@smkn4-tsm.sch.id</p>
        </div>
        <button class="btn logout">LOGOUT</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Kolom {
  display: flex;
  margin-top: 3%;
  align-items: center;
  justify-content: center;
}
.tinggi {
  width: 30%;
  min-height: 60vh;
  background-color: #5B5A5A;
}
.profil {
  max-width: 30%;
  max-height: 30%;
  border-radius: 50%;
}

.profil img {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  border-radius: 50%;
}


.KolomEmail{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8F8261;
  width: 80%;
  height: 5%;
}
.TextEmail{
  margin: 0 auto;
  color: white;
  max-width: fit-content;
}
.TextEmail p{
  font-size: large;
  max-width: fit-content;
}
.logout {
  background-color: #9C3939;
  color: white;
}
</style>
