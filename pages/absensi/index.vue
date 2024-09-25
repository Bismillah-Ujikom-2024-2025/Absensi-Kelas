<template>
  <div class="container-fluid">
    <div class="col-lg-12">
      <h2 class="Judul text-center my-4">FORM ABSENSI</h2>
      <div class="float">
        <div class="Inputan">
          <label>Photo : </label>
          <div style="padding-top: 10px;">
            <input type="file" accept="image/*">
          </div>
          <div class="Keterangan">
            <label>Keterangan : </label>
            <div style="padding-top: 10px;">
              <select class="form-control" style="width:450px;">
                <option value="" disabled>Masukkan Keterangan</option>
                <option value="h">Hadir</option>
                <option value="s">Sakit</option>
                <option>Izin</option>
                <option>Alfa</option>
                <option>Dispen</option>
              </select>
            </div>
          </div>
          <div class="d-grid d-md-flex justify-content-md-end mt-5">
            <button class="btn btn-primary" type="button">Button</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Judul{
  padding-top: 75px;
}
.Inputan{
  margin-top: 7%;
  margin-left: 37%;
}
.Keterangan{
  padding-top: 25px;
  margin-top: 20px;
}
.KolomKirim{
  padding-top: 100px;
  padding-right: 1%;
}
.button{
  margin-left: 70px;
}
</style>