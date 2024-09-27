<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center my-4">RIWAYAT KUNJUNGAN</h2>
        <div class="my-3">
          <input type="search" class="form-control form-control-lg rounded-5" placeholder="Search...">
        </div>
        <div class="my-3 text-muted">menampilkan 1 dari 1</div>
        <table class="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>NAMA</td>
              <td>JENIS KELAMIN</td>
              <td>KELAS</td>
              <td>WAKTU</td>
              <td>KETERANGAN</td>
              <td>FOTO</td>
            </tr>
            <div class="isi1">
              <tr>
                <td>1</td>
                <td>Sabila Agustina</td>
                <td>Perempuan</td>
                <td>XII PPLG 1</td>
                <td>.....</td>
                <td>Sakit</td>
                <td>...</td>
              </tr>
            </div>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
input{
  text-align: center;
}
hr {
    border: none;
    height: 1px;
    color: #333; 
    background-color: #333;
    width: 30%;
    justify-content: center;
    align-items: center;
}
.pencarian {
  align-items: center;
  justify-content: center;
}
.isi1{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>