<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center RiwayatKunjungan">Riwayat Kunjungan</h2>
        <div class="my-3">
          <div class="input-icon">
            <input type="text" class="form-control rounded-5 bgi" placeholder="Search...">
            <i class="bi bi-search"></i>
          </div>
        </div>
        <div class="text-muted JudulMR">Menampilkan 1 dari 1</div>
        <div class="Table1">
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
  </div>
</template>

<style scoped>
input{
  text-align: center;
}
.input-icon {
    position: relative;
    display: flex;
    justify-content: center; /* Mengatur agar elemen anak berada di tengah secara horizontal */
    align-items: center; /* Mengatur agar elemen anak berada di tengah secara vertikal (jika tinggi ditentukan) */
}

.input-icon input {
    padding-left: 30px; /* Memberikan ruang untuk ikon */
}

.input-icon i {
    position: absolute;
    right: 120px; /* Posisi ikon di sebelah kanan */
    top: 50%;
    transform: translateY(-50%); /* Mengatur posisi vertikal ikon */
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
.bgi{
  display: flex;
  background-color: aliceblue;
  width: 1700px;
}
.Table1{
  padding-left: 2%;
  padding-right: 2%;
}
.JudulMR{
  padding-left: 2%;
  padding-right: 2%;
  margin: 30px 0px 30px 0px;
}
.RiwayatKunjungan{
  font-size: 50px;
  font-family: 'Times New Roman', Times, serif;
}
</style>