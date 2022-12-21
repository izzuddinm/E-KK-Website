<template>
  <div>
    <div
      class="bg-light mb-4 mt-3"
      style="
        border-radius: 20px;
        height: 85px;
        background-color: linear-gradient(to right, #41aaeb, #78c4d7);
      "
    >
      <div class="p-3 judul" >
        <h1 class="ml-2">
          <img src="../assets/family.png" style="width: 40px" alt="" />{{ title }} Kartu
          Keluarga
        </h1>
      </div>
    </div>
    <div class="row ml-3">
      <div>
        <router-link to="/dashboard">
          <button type="button" class="btn btn-warning ml-3 btn">Back</button>
        </router-link>
      </div>
      <div>
        <button
          v-show="updateS"
          type="button"
          class="btn btn-secondary ml-3 btn"
          v-on:click="buttonUpdate"
          value="update"
        >
          Update Kartu Keluarga
        </button>
      </div>
      <div>
        <router-link :to="{ name: 'listanggota' }">
          <button v-show="updateS" type="button" class="btn btn-secondary ml-3 btn">
            Lihat Anggota Keluarga
          </button>
        </router-link>
      </div>
    </div>
    <div class="bg-light mb-4 mt-3" style="border-radius: 20px; height: 600px">
      <br /><br />
      <form @submit.prevent="inputDataKK">
        <div class="form-row">
          <div class="form-group col-md-6">
            <h6 class="mr-2">Nomor Kartu Keluarga</h6>
            <input
              :disabled="ReadonlyKK"
              v-model="datakeluarga.nomor_kk"
              type="number"
              class="form-control"
              placeholder="Input Nomor Kartu Keluarga..."
            />
          </div>
          <div class="form-group col-md-6">
            <h6 class="mr-2">Desa/Kelurahan</h6>
            <input
              :disabled="ReadonlyKK"
              v-model="datakeluarga.desa_kelurahan"
              type="text"
              class="form-control"
              placeholder="Input Desa/Kelurahan..."
            />
          </div>
        </div>
        <div>
          <div class="form-group shadow-textarea">
            <h6>Alamat</h6>
            <textarea
              :disabled="ReadonlyKK"
              v-model="datakeluarga.alamat"
              class="form-control z-depth-1"
              rows="3"
              placeholder="Input Alamat..."
            ></textarea>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <h6 class="mr-2">RT</h6>
            <input
              :disabled="ReadonlyKK"
              v-model="datakeluarga.rt"
              type="number"
              class="form-control"
              placeholder="Input Rt..."
            />
          </div>
          <div class="form-group col-md-6">
            <h6 class="mr-2">RW</h6>
            <input
              :disabled="ReadonlyKK"
              v-model="datakeluarga.rw"
              type="number"
              class="form-control"
              placeholder="Input Rw..."
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <h6 class="mr-2">Kecamatan</h6>
            <input
              :disabled="ReadonlyKK"
              v-model="datakeluarga.kecamatan"
              type="text"
              class="form-control"
              placeholder="Input Kecamatan"
            />
          </div>
          <div class="form-group col-md-6">
            <h6 class="mr-2">Kabupaten/Kota</h6>
            <input
              :disabled="ReadonlyKK"
              v-model="datakeluarga.kabupaten_kota"
              type="text"
              class="form-control"
              placeholder="Input Kabupaten/Kota"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <h6 class="mr-2">Provinsi</h6>
            <input
              :disabled="ReadonlyKK"
              v-model="datakeluarga.provinsi"
              type="text"
              class="form-control"
              placeholder="Input Provinsi..."
            />
          </div>
          <div class="form-group col-md-6">
            <h6 class="mr-2">Kode Pos</h6>
            <input
              :disabled="ReadonlyKK"
              v-model="datakeluarga.kode_pos"
              type="number"
              class="form-control"
              placeholder="Input Kode Pos..."
            />
          </div>
        </div>
        <div class="row ml-1">
          <button
            v-show="!btnUpdate"
            @click="cancelFunc"
            type="button"
            class="btn btn-warning text-light"
          >
            Cancel
          </button>
          <button v-show="!btnUpdate" type="submit" class="btn btn-primary ml-3">
            {{ buttonVal }}
          </button>
        </div>
        <div class="text-center">
          <button
            v-show="title == 'Tambah'"
            type="submit"
            class="btntitle btn-primary text-center"
          >
            {{ buttonVal }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Kartu_KeluargaService from "@/services/Kartu_KeluargaService";
import Swal from "sweetalert2";
export default {
  name: "TambahKKComponents",
  methods: {
    inputDataKK() {
      let data = this.datakeluarga;
      if (this.buttonVal === "Submit") {
        Kartu_KeluargaService.create(data)
          .then((response) => {
            console.log(response.data);
          
          })
          Swal.fire("Sukses", "Data Anda Berhasil Ditambahkan !!", "success")
          .catch((e) => {
            console.log(e);
          });
        // location.reload();
      } else {
        Kartu_KeluargaService.updateKK(data.id, data)
          .then((response) => {
            console.log(response.data);
          })
          Swal.fire("Sukses", "Data Anda Berhasil Diupdate !!", "success")
          .catch((e) => {
            console.log(e);
            console.log("gagal");
          });
        // location.reload();
      }
    },
    buttonUpdate() {
      this.ReadonlyKK = false;
      this.updateS = false;
      this.btnUpdate = false;
      this.title = "Update";
    },
    cancelFunc() {
      location.reload();
    },
    getKKbyid(id) {
      Kartu_KeluargaService.getKKbyId(id)
        .then((response) => {
          this.datakeluarga = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  props: ["propsKK"],
  mounted() {
    if (this.$route.name == "detailkk") {
      this.getKKbyid(this.$route.params.id);
      this.title = "Detail";
      this.buttonVal = "Update";
      this.updateS = true;
    } else if (this.title == "Tambah") {
      this.ReadonlyKK = false;
      this.updateS = false;
    }
  },
  data() {
    return {
      datakeluarga: {
        alamat: "tuban",
        desa_kelurahan: null,
        kabupaten_kota: null,
        kecamatan: null,
        kode_pos: null,
        nomor_kk: null,
        provinsi: null,
        rt: null,
        rw: null,
      },
      title: "Tambah",
      ReadonlyKK: true,
      buttonVal: "Submit",
      btnUpdate: true,
      updateS: false,
    };
  },
};
</script>

<style></style>
