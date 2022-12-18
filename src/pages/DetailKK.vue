<template>
  <div class="d-flex row" >
    <div class="col col-md-3 ">
      <Sidebar style="position:fixed"></Sidebar>
    </div>
    <div class="col col-md-9 ">
      <TambahKK :propsKK="datakeluarga"></TambahKK>
      <Content v-show="none" @updateKK="updateKKFunc"></Content>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import TambahKK from '../components/TambahKK.vue';
import Content from "../components/Content";
export default {
    name: "DetaikKKPage",
    components: {
      TambahKK,
      Sidebar,
        Content
  },
  data() {
    return{
  datakeluarga:null
   }
  },
  methods: {
    updateKKFunc(item) {
        this.datakeluarga= item
      }
    }

}
</script>

<style>

</style>