<template>
  <div class="container-fluid">
    <h2 class="JudulFormAbsensi text-center">Form Absensi</h2>
    <form @submit.prevent="kirimData">
      <div class="Inputan">
        <label>Poto : </label>
        <div style="padding-top: 10px;">
          <input type="file" accept="image/*">
          <p class="fst-italic">Poto wajib menggunakan Watermark Waktu!</p>
        </div>
        <div class="Keterangan">
          <label>Keterangan : </label>
          <div style="padding-top: 10px;">
            <select v-model="form.Keterangan" class="form-control" style="width:450px;">
              <option value="" disabled>Masukan Keterangan</option>
              <option v-for="(item, i) in objectives" :key="i" :value="item.id">{{ item.keterangan }}</option>
            </select>
          </div>
        </div>
        <div class="d-md-flex justify-content-md-end mt-5 button">
          <button type="submit" class="btn btn-primary">Kirim</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient()

const members = ref([]);
const objectives = ref([]);

const form = ref ({
  nama: "",
  jeniskelamin: "",
  kelas:"",
  waktu:"",
  Keterangan:"",
  foto:"",
});

const kirimData = async () => {
  console.log(form.value);
  const { error } = await supabase.from( "kehadiran" ).insert([form.value])
  if (!error) navigateTo("/absensi")
  else throw error
}
const getKeterangan = async () => {
  const { data, error } = await supabase.from("keterangan").select("*")
  if(data) objectives.value = data
};

onMounted(() => {
  getKeterangan();
});
</script>

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