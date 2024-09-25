<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center my-4">RIWAYAT KUNJUNGAN</h2>
        <div class="my-3">
          <input type="search" class="form-control form-control-lg rounded-5" placeholder="Search...">
        </div>
          <nav class="navbar bg-light">
            <div class="container-fluid  pencarian">
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
                <div>
                  <hr>
                </div>
              </form>
            </div>
          </nav>
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

</style>