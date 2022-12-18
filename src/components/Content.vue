<template>
  <div style="">
    <div class="bg-light mb-4 mt-3" style="border-radius: 20px">
      <div class="p-2 mt-2 ml-3" style="color: #41aaeb">
        <h1>Dashboard</h1>
      </div>
    </div>
    <div class="card-body d-flex bg-light" style="border-radius: 20px;">
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
            <h1 class="text-light">10</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light" style="border-radius: 20px">
      <div class="mt-4 p-4" style="color: #41aaeb">
        <h2>Data Kartu Keluarga</h2>
      </div>
      <div>
        <table class="table-striped table " style=" border: 10px">
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
            <tr  v-for="(item, index) in datakeluarga" :key="index">
              <th class="text-center" scope="row">{{ (index += 1) }}</th>
              <td>{{ item.nomor_kk }}</td>
              <td>{{ item.alamat }}</td>
              <td>{{ item.kabupaten_kota }}</td>
              <td>{{ item.kode_pos }}</td>
              <div class="d-flex mt-2">
                <router-link :to="{ name: 'detailkk', params:{id: item.id}}" @click.prevent="$emit ('updateDataKK', item)">
                  <button type="button" class="btn btn-success btn-sm" >Detail</button>
                </router-link>
                <div>
                  <button
                    type="button"
                    class="btn btn-danger ml-2 btn-sm"
                    @click="deleteDataKK(item.id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Kartu_KeluargaService from "../services/Kartu_KeluargaService";
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
    deleteDataKK(id) {
      let scope = this;
      if (confirm("Apakah anda yakin hapus?")) {
        Kartu_KeluargaService.deleteKK(id)
          .then((response) => {
            console.log("sukses");
            console.log(response.data);
            scope.$emit("deleteEmit");
          })
          .catch((e) => {
            console.log(e);
          });
        location.reload();
      } else {
        this.$alert("Hapus di Batalkan !");
      }
    },
  },

  mounted() {
    this.getDataKK();
  },
  data() {
    return {
      datakeluarga:null   
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
  background: linear-gradient(to right, #4db5f7, #5dd0ed);
  border-bottom-right-radius: 30px;
  border-top-left-radius: 20px;
  border: 0px;
  box-shadow: 30px;
}
</style>
