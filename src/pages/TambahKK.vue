<template>
   <div class="d-flex row" >
    <div class="col col-md-3">
      <Sidebar style="position:fixed"></Sidebar>
    </div>
    <div class="col col-md-9">
      <TambahKK></TambahKK>
    </div>
  </div>
</template>

<script>
import TambahKK from "../components/TambahKK.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "TambahKKPages",
  components: {
    TambahKK,
    Sidebar,
  },
};
</script>

<style></style>
