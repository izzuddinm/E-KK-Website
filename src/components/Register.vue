<template>
  <div>
    <div class="container register w-60" style="border-radius: 30px; margin-top: 120px">
      <div class="row">
        <div class="col-md-3 register-left">
          <img
            src="../assets/ktp.png"
            style="width: 300px; height: 300px"
            class="mb-0"
            alt=""
          />

          <br />
        </div>
        <div class="col-md-9 register-right justify-content-center">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 class="register-heading">Register Account</h3>
              <form @submit="inputRegistrasi">
                <div class="d-flex register-form" >
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                    v-model="dataRegistrasi.nama"
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      value=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                    v-model="dataRegistrasi.email"
                      type="email"
                      class="form-control"
                      placeholder="Your Email"
                      value=""
                    />
                  </div>
                  <div class="">
                    <router-link to="/">
                      <button class="btnRegister">Log In</button>
                    </router-link>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                    v-model="dataRegistrasi.password"
                      type="password"
                      class="form-control"
                      placeholder="Create Password"
                      value=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                    v-model="dataRegistrasi.password"
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                      value=""
                    />
                  </div>

                  <div class="d-flex">
                    <button type="submit" class="btnRegister">{{btnregister}}</button>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService';
export default {
  name: "RegisterComponent",
  data(){
    return {
      dataRegistrasi: {
        "nama": null,
      "email": null,
     "password": null
      },
    btnregister:"Register"
    }
  },
  methods: {
    inputRegistrasi() {
      let data = this.dataRegistrasi;
      if (this.btnregister === "Register") {
        UserService.create(data)
          .then((response) => {
            console.log(response.data);
            console.log("gagal")
          })
          .catch((e) => {
            console.log(e);
        
          });
        // location.reload();
        }
    },
  },

};
</script>

<style scope>
.register {
  background: linear-gradient(to right, #41aaeb, #78c4d7);
  margin-top: 3%;
  padding: 3%;
}
.register-left {
  text-align: center;
  color: #fff;
  margin-top: 4%;
}
.register-left input {
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  width: 60%;
  background: #f8f9fa;
  font-weight: bold;
  color: #383d41;
  margin-top: 30%;
  margin-bottom: 3%;
  cursor: pointer;
}
.register-right {
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
}
.register-left img {
  margin-top: 15%;
  margin-bottom: 5%;
  width: 25%;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.register-left p {
  font-weight: lighter;
  padding: 12%;
  margin-top: -9%;
}
.register .register-form {
  padding: 10%;
  margin-top: 10%;
}
.btnRegister {
  float: right;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #41aaeb;
  color: #fff;
  font-weight: 600;
  width: 50%;
  cursor: pointer;
}
.register .nav-tabs {
  margin-top: 3%;
  border: none;
  background: #41aaeb;
  border-radius: 1.5rem;
  width: 28%;
  float: right;
}
.register .nav-tabs .nav-link {
  padding: 2%;
  height: 34px;
  font-weight: 600;
  color: #fff;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover {
  border: none;
}
.register .nav-tabs .nav-link.active {
  width: 100px;
  color: #0062cc;
  border: 2px solid #0062cc;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.register-heading {
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #495057;
}
</style>
