<template>
  <div style="">
    <div class="bg-light mb-4 mt-3" style="border-radius: 20px">
      <div class="p-2 mt-2 ml-3" style="color: #41aaeb">
        <h1 class="judul">Dashboard</h1>
      </div>
    </div>
    <div class="card-body d-flex bg-light" style="border-radius: 20px">
      <div class="box mr-4 bg-warning">
        <div>
          <div class="card-title p-3">
            <h4 class="text-light">Jumlah Kartu Keluarga</h4>
            <h1 class="text-light">{{ datakeluarga.length }}</h1>
          </div>
        </div>
      </div>
      <div class="box" style="">
        <div>
          <div class="card-title p-3">
            <h4 class="text-light">Jumlah Seluruh Warga</h4>
            <h1 class="text-light">{{ dataAnggota.length }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light" style="border-radius: 20px">
      <div class="mt-4 p-4" style="color: #41aaeb">
        <h2 class="judul">Data Kartu Keluarga</h2>
      </div>
      <div>
        <table class="table-striped table" style="border: 10px">
          <thead>
            <tr style="background-color: linear-gradient(to right, #4db5f7, #78c4d7)">
              <th scope="col" class="text-center">No</th>
              <th scope="col">Nomor KK</th>
              <th scope="col">Alamat</th>
              <th scope="col">Kota</th>
              <th scope="col">Kode Pos</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in datakeluarga" :key="index">
              <th class="text-center" scope="row">{{ (index += 1) }}</th>
              <td>{{ item.nomor_kk }}</td>
              <td>{{ item.alamat }}</td>
              <td>{{ item.kabupaten_kota }}</td>
              <td>{{ item.kode_pos }}</td>
              <div class="d-flex mt-2">
                <router-link
                  :to="{ name: 'detailkk', params: { id: item.id } }"
                  @click.prevent="$emit('updateDataKK', item)"
                >
                  <button type="button" class="btn btn-secondary btn-sm">Detail</button>
                </router-link>
                <div>
                  <button
                    type="button"
                    class="btn btn-danger ml-2 btn-sm"
                    @click.prevent="deleteDataKK(item.id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </tr>
          </tbody>
        </table>
        <div>
          <!-- <h4 class="text-center text-danger">Data Tidak Tersedia</h4> -->
          <div v-if="datakeluarga.length < 1" style="justify-content: center">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Kartu_KeluargaService from "../services/Kartu_KeluargaService";
import Anggota_KeluargaService from "@/services/Anggota_KeluargaService";
import Swal from "sweetalert2";
export default {
  name: "ContentComponents",
  methods: {
    getDataKK() {
      Kartu_KeluargaService.getAll()
        .then((response) => {
          this.datakeluarga = response.data;
          console.log(this.datakeluarga);
          // this.jenis_kelamin = true;
        })
        .catch((e) => {
          console.log(e);
          // this.jenis_kelamin = false;
        });
    },
    getData() {
      Anggota_KeluargaService.getAll()
        .then((response) => {
          this.dataAnggota = response.data;
          console.log(this.dataAnggota);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteDataKK(id) {
      // let scope = this;

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Apa Anda Yakin Ingin Menghapus Data Anda?",
          text: "kalau yakin klik hapus !!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Hapus",
          cancelButtonText: "Batal",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            "Deleted!",
              swalWithBootstrapButtons.fire(
                Kartu_KeluargaService.deleteKK(id).then((response) => {
                  console.log("sukses");
                  console.log(response.data);
                  // scope.$emit("deleteEmit");

                  Anggota_KeluargaService.deleteAKbyIdAK(id).then((response) => {
                    console.log(response.data);
                    location.reload();
                  });
                })
              );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire("Hapus Dibatalkan !!");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.getDataKK();
    this.getData();
  },
  data() {
    return {
      datakeluarga: "",
      dataAnggota: "",
    };
  },
};
</script>

<style scope>
.tombol {
  width: 5vw;
  border-radius: 5px;
}
.box {
  width: 300px;
  height: 125px;
  background: linear-gradient(to left, #8d80df, #718bff);
  border-bottom-right-radius: 30px;
  border-top-left-radius: 20px;
  border: 0px;
  box-shadow: 30px;
}
</style>
