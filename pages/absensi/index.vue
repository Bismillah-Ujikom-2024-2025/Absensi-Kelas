<template>
  <div class="container-fluid">
    <h2 class="JudulFormAbsensi text-center">Form Absensi</h2>
      <div class="Inputan">
        <label>Poto : </label>
        <div style="padding-top: 10px;">
          <input type="file" accept="image/*">
          <p class="fst-italic">Poto wajib menggunakan Watermark Waktu!</p>
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
        <div class="d-md-flex justify-content-md-end mt-5 button">
          <button class="btn btn-primary" type="button">Kirim</button>
        </div>
      </div>
  </div>
</template>

<style scoped>
.JudulFormAbsensi{
  font-size: 50px;
  font-family: 'Times New Roman', Times, serif;
}
.Inputan {
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
.button {
  margin-right: 62%;;
}
p{
  font-size: 12px;
}
</style>