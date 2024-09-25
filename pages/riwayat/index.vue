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
              <td class="id">ID</td>
              <td class="nama">NAMA</td>
              <td class="nama">JENIS KELAMIN</td>
              <td class="kelas">KELAS</td>
              <td class="waktu">WAKTU</td>
              <td class="keterangan">KETERANGAN</td>
              <td class="foto">FOTO</td>
            </tr>
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

.id{
  padding-left: 2%;
}

.nama {
  padding-left: 5%;
}
.kelas {
  margin-right: 3%;
}
.foto{
  margin-right: 15%;
}
.waktu{
  padding-left: 2%;
}
.keterangan {
  padding-left: 2%;
}
</style>