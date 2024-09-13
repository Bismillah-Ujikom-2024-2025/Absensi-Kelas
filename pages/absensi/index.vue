<template>
  <div class="container-fluid">
      <div class="col-lg-12">
        <h2 class="text-center my-4">FORM ABSENSI</h2>
      </div>
      <div class="Waktu">
        <label>Waktu :</label>
        <div style="padding-top: 10px;">
          <input class="form-control" style="width:250px;" type="date">
        </div>
      </div>
      <div class="NamaLengkap">
        <label>Nama Lengkap : </label>
        <div style="padding-top: 10px;">
          <select class="form-control" style="width:450px;">
          <option>Radi Maulana Tsaqif</option>
          <option>Sabila Agustina</option>
          <option>Dini Oktapriyanti</option>
          <option>Syifa Riswandi</option>
        </select>
        </div>
      </div>
    </div>
</template>

<style scoped>
.Waktu{
  margin-top: 75px;
  margin-left: 30px;
}
.NamaLengkap{
  margin-top: 30px;
  margin-left: 30px;
}
</style>