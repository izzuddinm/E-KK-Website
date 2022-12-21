<template>
  <div>
    <div style="border-radius: 20px; height: 85px" class="bg-light mb-4 mt-3">
      <div class="p-3 judul" >
        <h1 class="judul ml-2">
          <img src="../assets/family.png" style="width: 40px" alt="" />{{ titleanggota }}
          Anggota Keluarga
        </h1>
      </div>
    </div>
    <div class="row ml-3">
      <div>
        <router-link :to="{ name: 'detailkk' }">
          <button type="button" class="btn btn-primary ml-3 btn">Back</button>
        </router-link>
      </div>
      <div>
        <button
          type="button"
          class="btn btn-secondary ml-3 btn"
          v-on:click="btnUpdateFunc"
          value="update"
        >
          Update Kartu Keluarga
        </button>
      </div>
    </div>
    <div
      v-show="!showForm"
      class="bg-light mb-4 mt-3"
      style="border-radius: 20px; height: 490px"
    >
      <div>
        <form @submit.prevent="inputDataAK">
          <div>
            <div class="form-row mt-3">
              <div class="col-md-6 mb-3 mt-5">
                <h6>NIK</h6>
                <input
                  :disabled="readonly"
                  v-model="dataAnggota1.nik"
                  type="number"
                  class="form-control"
                  placeholder="Masukkan Nik"
                />
              </div>
              <div class="col-md-6 mb-3 mt-5">
                <h6>Tanggal Lahir</h6>
                <input
                  :disabled="readonly"
                  v-model="dataAnggota1.tanggal_lahir"
                  type="date"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <h6>Nama</h6>
                <input
                  :disabled="readonly"
                  v-model="dataAnggota1.nama"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan Nama"
                />
              </div>
              <div class="col-md-6 mb-3">
                <h6>Agama</h6>
                <select
                  type="text"
                  class="custom-select"
                  :disabled="readonly"
                  v-model="dataAnggota1.agama"
                >
                  <option>Islam</option>
                  <option>Kristen</option>
                  <option>Hindu</option>
                  <option>Budha</option>
                  <option>Katholik</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <h6>Jenis Kelamin</h6>
                <select
                  :disabled="readonly"
                  type="text"
                  class="custom-select"
                  v-model="dataAnggota1.jenis_kelamin"
                >
                  <option selected></option>
                  <option>Laki-Laki</option>
                  <option>Perempuan</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <h6>Pendidikan</h6>
                <select
                  class="custom-select"
                  :disabled="readonly"
                  v-model="dataAnggota1.pendidikan"
                >
                  <option>SD</option>
                  <option>SMP</option>
                  <option>SMA/SMK</option>
                  <option>D3</option>
                  <option>D4/S1</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <h6>Tempat Lahir</h6>
                <input
                  :disabled="readonly"
                  v-model="dataAnggota1.tempat_lahir"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan Tempat Lahir"
                />
              </div>
              <div class="col-md-6 mb-3">
                <h6>Kepala Keluarga</h6>
                <select
                  class="custom-select"
                  :disabled="readonly"
                  v-model="dataAnggota1.kepala_keluarga"
                >
                  <option selected></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div class="row ml-1">
              <button type="button" v-show="toggleCancel" class="btn btn-warning text-light" @click="cancelFunc">Cancel</button>
              <button type="submit"  v-show="toggleUpdate" class="btn btn-primary ml-3" @click="btnSubmitAK" >Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Anggota_KeluargaService from "@/services/Anggota_KeluargaService";
import Swal from "sweetalert2";
export default {
  name: "DetailAnggotaComponents",
  data() {
    return {
      dataAnggota: {
        agama: null,
        id_kk: null,
        jenis_kelamin: null,
        kepala_keluarga: null,
        nama: null,
        nik: null,
        pendidikan: null,
        tanggal_lahir: null,
        tempat_lahir: null,
      },
      dataAnggota1: {
        agama: null,
        id_kk: null,
        jenis_kelamin: null,
        kepala_keluarga: null,
        nama: null,
        nik: null,
        pendidikan: null,
        tanggal_lahir: null,
        tempat_lahir: null,
      },
      btnanggota: "Button",
      btnSubmitAK: "Submit",
      titleanggota: "Detail",
      showTambah: false,
      showTable: false,
      showForm: false,
      readonly: true,
      btnUpdate: true,
      toggleUpdate: false,
      toggleCancel: false,
    };
  },
  methods: {
    inputDataAK() {
      let data = this.dataAnggota1;
      if (this.btnSubmitAK === "Submit") {
        Anggota_KeluargaService.create(data)
          .then((response) => {
            this.dataAnggota1 = response.data;
            console.log(response.data);
            // console.log("berhasil")
          })
          .catch((e) => {
            console.log(e);
            // console.log("gagal")
          });
        // location.reload();
      }else {
        Anggota_KeluargaService.updateAK(data.id, data)
          .then((response) => {
            console.log(response.data);
          })
          Swal.fire("Sukses", "Data Anda Berhasil Diupdate !!", "success")
          .catch((e) => {
            console.log(e);
            console.log("gagal su");
          });
        // location.reload();
      }
    },
    getDataById(id) {
      Anggota_KeluargaService.getAKbyId(id)
        .then((response) => {
          this.dataAnggota1 = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    btnDetail() {
      // this.showForm = false,
      this.showForm = true;
    },
    btnUpdateFunc() {
      (this.readonly = false), (this.titleanggota = "Update");
      this.btnSubmitAK = false;
      this.toggleCancel = true,
      this.toggleUpdate = true
    },
    cancelFunc() { 
      location.reload();
    },
    SubmitIdAK() {
      this.dataAnggota1.id_kk = this.$route.params.id;
    },
    deleteDataAK(id) {
      if (confirm("Apakah anda yakin hapus?")) {
        Anggota_KeluargaService.deleteAK(id)
          .then((response) => {
            console.log(response.data);
            console.log("sukses");
          })
          .catch((e) => {
            console.log(e);
          });
        location.reload();
      } else {
        this.$alert("Hapus di Batalkan !");
      }
    },
    getDataAKbyIdAK(id_kk) {
      Anggota_KeluargaService.getAKbyIdAK(id_kk)
        .then((response) => {
          this.dataAnggota = response.data;
          console.log("berhasil");
          console.log(this.dataAnggota);
        })
        .catch((e) => {
          console.log(e);
          console.log("gagal");
        });
    },

    btnanggotaFunc() {
      (this.titleanggota = "Tambah"),
        (this.showTambah = true),
        (this.showForm = true),
        (this.showTable = true);
    },
  },
  mounted() {
    this.getDataAKbyIdAK(this.$route.params.id);
    this.getDataById(this.$route.params.idk);

    if (this.btnanggota == "Button") {
      (this.titleanggota = "Detail"), (this.showTambah = true);
    } else if (this.btnanggota == true) {
      this.showTambah = true;
    } else {
      this.showTambah = "Detail";
    }
  },
};
</script>

<style>
.judul{
  background: linear-gradient(to left, #8d80df,#7a8cda);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
