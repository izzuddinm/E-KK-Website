<template>
  <div>
    <div style="border-radius: 20px; height: 85px" class="bg-light mb-4 mt-3">
      <div class="p-3">
        <h1 class="judul ml-2">
          <img src="../assets/family.png" style="width: 40px" alt="" />{{ titleanggota }}
          Anggota Keluarga
        </h1>
      </div>
    </div>
    <div class="row ml-3">
      <div>
        <router-link :to="{ name: 'detailkk' }">
          <button type="button" class="btn btn-warning ml-3 btn">Back</button>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'listanggota' }">
          <button
            type="button"
          
            v-on:click="btnanggotaFunc"
            class="btn btn-secondary ml-3 btn"
          >
            Tambah Anggota Keluarga
          </button>
        </router-link>
      </div>
    </div>
    <div
      v-show="showForm"
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
                  v-model="dataAnggota1.nik"
                  type="number"
                  class="form-control"
                  placeholder="Masukkan Nik"
                />
              </div>
              <div class="col-md-6 mb-3 mt-5">
                <h6>Tanggal Lahir</h6>
                <input
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
                  v-model="dataAnggota1.nama"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan Nama"
                />
              </div>
              <div class="col-md-6 mb-3">
                <h6>Agama</h6>
                <select type="text" class="custom-select" v-model="dataAnggota1.agama">
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
                <select class="custom-select" v-model="dataAnggota1.pendidikan">
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
                  v-model="dataAnggota1.tempat_lahir"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan Tempat Lahir"
                />
              </div>
              <div class="col-md-6 mb-3">
                <h6>Kepala Keluarga</h6>
                <select class="custom-select" v-model="dataAnggota1.kepala_keluarga">
                  <option selected></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <button class="btntitle btn-primary" type="submit" @click="SubmitIdAK">
              {{ btnSubmitAK }}
            </button>
          </div>
        </form>
      </div>
    </div>
    <div v-show="!showTable" class="bg-light" style="border-radius: 20px">
      <div class="mt-4 judul p-4">
        <h3>Tabel</h3>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">NIK</th>
            <th scope="col">Nama</th>
            <th scope="col">Jenis Kelamin</th>
            <th scope="col">Kepala Keluarga</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(itemAnggota, indexAnggota) in dataAnggota" :key="indexAnggota">
            <th scope="row">{{ (indexAnggota += 1) }}</th>
            <td>{{ itemAnggota.nik }}</td>
            <td>{{ itemAnggota.nama }}</td>
            <td>{{ itemAnggota.jenis_kelamin }}</td>
            <td>{{ itemAnggota.kepala_keluarga }}</td>
            <td>
              <div class="d-flex mt-2">
                <div>
                  <router-link
                    :to="{ name: 'detailAnggota', params: { idk: itemAnggota.id } }"
                  >
                    <button
                      type="button"
                      class="btn btn-secondary ml-3 btn-sm"
                     
                    >
                      Detail
                    </button>
                  </router-link>
                  <!-- <router-link :to="{ name: 'detailAnggota', params: { idk: itemAnggota.id } }" clas>tes</router-link> -->
                </div>

                <div>
                  <button
                    type="button"
                    class="btn btn-danger ml-2 btn-sm"
                    v-on:click="deleteDataAK(itemAnggota.id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <h2 v-if="dataAnggota.length < 1" style="justify-content: center">
          <img
            src="../assets/notfound.jpg"
            class="mb-4"
            style="
              width: 300px;
              margin-left: 430px;
              -webkit-animation: mover 3s infinite alternate;
              animation: mover 1s infinite alternate;
            "
            alt=""
          />
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import Anggota_KeluargaService from "../services/Anggota_KeluargaService";
import Swal from "sweetalert2";
export default {
  name: "ListAnggotaComponents",
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
      titleanggota: "Daftar",
      showTambah: false,
      showTable: false,
      showForm: false,
      showBtn: true,
    };
  },
  methods: {
    inputDataAK() {
      let data = this.dataAnggota1;
      if (this.btnSubmitAK === "Submit") {
        Anggota_KeluargaService.create(data).then((response) => {
          this.dataAnggota1 = response.data;
          console.log(response.data);
          // console.log("berhasil")
        });
        Swal.fire("Sukses", "Data Anda Berhasil Ditambahkan !!", "success").catch((e) => {
          console.log(e);
          // console.log("gagal")
        });
        // location.reload();
      }
    },
    btnDetail() {
      // this.showForm = false,
      this.showForm = true;
    },
    SubmitIdAK() {
      this.dataAnggota1.id_kk = this.$route.params.id;
    },
    deleteDataAK(id) {
      
      Anggota_KeluargaService.deleteAK(id)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          title: "Apa Anda Yakin Ingin Menghapus Data Anda?",
          text: "kalau yakin klik hapus !!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Hapus",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Data Anda Sudah Dihapus !!", "success");
          }
        });
          console.log("sukses");
        })
        .catch((e) => {
          console.log(e);
        });
      // location.reload();
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
      this.showBtn = false;
    },
  },
  mounted() {
    this.getDataAKbyIdAK(this.$route.params.id);

    if (this.btnanggota == "Button") {
      (this.titleanggota = "Daftar"), (this.showTambah = true);
    } else if (this.btnanggota == true) {
      this.showTambah = true;
    } else {
      this.showTambah = "Detail";
    }
  },
};
</script>

<style></style>
