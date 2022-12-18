<template>
  <div class="d-flex row" >
    <div class="col col-md-3 ">
      <Sidebar style="position:fixed"></Sidebar>
    </div>
    <div class="col col-md-9 ">
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Content from "../components/Content";
export default {
  name: "DashboardPages",
  components: {
    Sidebar,
    Content,
  
  },
};
</script>

<style></style>
