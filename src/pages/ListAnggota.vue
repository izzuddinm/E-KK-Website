<template>
    <div class="d-flex row" >
    <div class="col col-md-3 ">
      <Sidebar style="position:fixed"></Sidebar>
    </div>
    <div class="col col-md-9 ">
     <ListAnggota></ListAnggota>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import ListAnggota from '../components/ListAnggota.vue'
export default {
    name: "ListAnggotaPages",
    components: {
        Sidebar,
        ListAnggota
    }

}
</script>

<style>

</style>