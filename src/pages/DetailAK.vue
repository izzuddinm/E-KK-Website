<template>
  <div class="d-flex row" >
    <div class="col col-md-3 ">
      <Sidebar style="position:fixed"></Sidebar>
    </div>
    <div class="col col-md-9 ">
 <DetailAnggota></DetailAnggota>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import DetailAnggota from '@/components/DetailAnggota.vue';
export default {
    name: 'DetailAKComponents',
    components: {
      Sidebar,
        DetailAnggota
       
    }
}
</script>

<style>

</style>