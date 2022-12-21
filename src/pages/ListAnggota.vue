<template>
    <div class="d-flex row" >
    <div class="col col-md-3 ">
      <Sidebar style="position:fixed"></Sidebar>
    </div>
    <div class="col col-md-9 ">
     <ListAnggota></ListAnggota>
     <!-- <SuccessForm></SuccessForm> -->
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import ListAnggota from '../components/ListAnggota.vue'
// import SuccessForm from '@/components/SuccessForm.vue';
export default {
    name: "ListAnggotaPages",
    components: {
        Sidebar,
      ListAnggota,
        // SuccessForm
    }

}
</script>

<style>

</style>