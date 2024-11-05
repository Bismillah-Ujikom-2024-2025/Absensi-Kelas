<template>
  <div class="container-fluid">
    <h2 class="JudulFormAbsensi text-center">Form Absensi</h2>
    <form @submit.prevent="kirimData">
      <div class="Inputan">
        <label>Poto : </label>
        <div style="padding-top: 10px;">
          <input @change="handleFileInput" type="file" accept="image/*">
          <p class="fst-italic">Poto wajib menggunakan Watermark Waktu!</p>
        </div>
        <div class="Keterangan">
          <label>Keterangan : </label>
          <div style="padding-top: 10px;">
            <select v-model="form.keterangan" class="form-control" style="width:450px;">
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
const objectives = ref([]);
const file = ref(null);
const form = ref ({
  nama: "",
  jeniskelamin: "",
  kelas:"",
  waktu:"",
  keterangan:"",
});

const getKeterangan = async () => {
    const { data, error } = await supabase.from("keterangan").select("*")
    if(data) objectives.value = data
};

// upload foto
const handleFileInput = (event) => {
  file.value = event.target.files[0];
};

const kirimData = async () => {
  if (!file.value) {
    alert("Pilih file terlebih dahulu!");
    return;
  }

  try {
    const { data, error } = await supabase.storage.from("foto").upload(`public/${file.value.name}`, file.value);

    if (error) {
      throw error;
    }

    const publicUrl = supabase.storage.from("foto").getPublicUrl(`public/${file.value.name}`).data.publicUrl;
    const { error: insertError } = await supabase.from("kehadiran").insert([{ foto: publicUrl, ...form.value }]);

    if (!error) {
      window.location.reload();
    }

    if (insertError) {
      throw insertError;
    }

    alert("berhasil dikirim!");
  } catch (error) {
    console.error("Error uploading file:", error.message);
    // alert("Gagal mengupload file.");
  }
};
// end


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