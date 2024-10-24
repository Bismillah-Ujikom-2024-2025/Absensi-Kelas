<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center RiwayatKunjungan">Riwayat Kunjungan</h2>
        <div class="my-3">
          <form @submit.prevent="getCari">
            <div class="input-icon">
            <input type="text" class="form-control rounded-5 bgi" placeholder="Search...">
            <i class="bi bi-search"></i>
          </div>
          </form>
        </div>
        <div class="text-muted JudulMR">Menampilkan {{ saya?.length }} dari {{ TotalPengunjung }}</div>
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
            </thead>
            <tbody>
              <tr v-for="(visitor,i) in visitors" :key="i">
                <td>{{ i+1 }}.</td>
                <td>{{ visitor.keterangan }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <NuxtLink to="/Pengunjung/tambah">
      <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5 tulisan">Kembali</button>
    </NuxtLink>
  </div>
</template>

<script setup>

const supabase = useSupabaseClient()
const keyword = ref('')
const visitors = ref([])
const TotalKehadiran = ref(0);
const saya = ref(visitors)

const getKehadiran = async () => {
  const { data, error } = await supabase.from('kehadiran').select(`*, keterangan(*), id_siswa(*)`)
  if(data) visitors.value = data
}
const getCari = async () => {
    const { data, error } = await supabase.from('kehadiran').select(`*, keterangan(*), id_siswa(*)`)
    .ilike('nama', `%${keyword.value}%`)
    if(data) visitors.value = data
}
const getTotalKehadiran = async () => {
  const { count, error } = await supabase.from("kehadiran").select("*, keterangan(*)", { count: 'exact', head: true});
  if (count) TotalKehadiran.value = count;
};

onMounted(() => {
  getKehadiran()
  getCari()
  getTotalKehadiran()
})

</script>


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