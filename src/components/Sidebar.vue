<template>
  <div>
    <div class="wrapper ml-3">
      <div class="sidebar bg-light" style="width: 338px">
        <div>
          <div class="wrapper-sidebar">
            <div>
              <div class="title text-dark mt-2">
                <div
                  class="p-4 mt-3 d-flex mr-3 ml-3"
                  style="background-color: white; border-radius: 20px"
                >
                  <h3 class="judul ml-4 mt-2">E-KTP Admin</h3>
                </div>
              </div>
            </div>
            <hr />
            <div class="content-title justify-content-between column ml-4">
              <div>
                <div class="home mt-4">
                  <router-link to="/dashboard">
                    <button class="btntitle">Home</button>
                  </router-link>
                </div>
              </div>
              <div>
                <div class="home mt-4">
                  <router-link to="/tambahkk" >
                    <button class="btntitle">Add KK</button>
                  </router-link>
                </div>
              </div>

              <div>
                <div class="home mt-5">
                  <hr />
                  <router-link to="/">
                    <button class="btnout">
                      <img
                        src="../assets/log-out.png"
                        style="width: 20px"
                        class="mr-1 mb-1"
                        alt=""
                      />
                      Sign Out
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponents",
};
</script>

<style scope>
.sidebar {
  margin-left: 10px;
  margin-top: 15px;
  border-radius: 20px;
  width: 95%;
  height: 95vh;
  /* background-color:#41aaeb; */
}

.title {
  padding: 10px;
  margin-left: 5px;
  border-radius: 20px;
}
.content-title {
  padding: 30px;
  border: 0px;
}
.btntitle {
  transition: all 0.2s ease;
  width: 15vw;
  border: 0px;
  height: 40px;
  border-radius: 10px;
  color: black;
  background-color: white;
  font-weight: 620;
}
.btntitle:hover,
.btntitle:focus {
  background: linear-gradient(to left, #8d80df, #7a8cda);
  color: #fff;
}
.btntitle:active{
  background: linear-gradient(to left, #8d80df, #7a8cda);
}
.btnout {
  transition: all 0.2s ease;
  width: 8vw;
  border: 0px;
  height: 40px;
  border-radius: 15px;
  color: black;
  background-color: white;
  margin-left: 50px;
  margin-top: 210px;
  font-weight: 620;
}

.router-link-exact-active router-link-active {
  background: linear-gradient(to left, #8d80df, #7a8cda);
}

.btnout:hover,
.btnout:focus {
  background: linear-gradient(to left, #8d80df, #7a8cda);
  color: #fff;
}

.judul {
  background: linear-gradient(to left, #8d80df, #7a8cda);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

 
</style>
