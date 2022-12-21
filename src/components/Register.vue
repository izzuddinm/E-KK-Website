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
              @submit.prevent="inputRegister"
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 class="register-heading">Register Account</h3>
              <div>
                <form>
                  <div class="d-flex register-form">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          v-model="registrasiData.nama"
                          type="text"
                          class="form-control"
                          placeholder="Username"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <input
                          v-model="registrasiData.email"
                          type="email"
                          class="form-control"
                          placeholder="Your Email"
                          value=""
                        />
                        <p v-if="emailValid" class="text-danger">Email Sudah Digunakan</p>
                      </div>
                      <div class="">
                        <router-link to="/" class="mt-5">
                          <button class="btnRegister mt-5">Log In</button>
                        </router-link>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          v-model="registrasiData.password"
                          type="password"
                          class="form-control"
                          placeholder="Create Password"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <input
                          v-model="password2"
                          type="password"
                          class="form-control"
                          placeholder="Confirm Password"
                          value=""
                        />
                        <p v-if="passwordValid" class="text-danger">
                          Password Tidak Sama
                        </p>
                      </div>

                      <div class="d-flex ">
                        <button type="submit" class="btnRegister mt-5">Register</button>
                      </div>
                    </div>
                    <div>
                      <h5 v-if="success">Berhasil Daftar silahkan login</h5>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/UserService";
export default {
  name: "RegisterComponent",
  // data(){
  //   return {
  //     dataRegistrasi: {
  //       "nama": null,
  //     "email": null,
  //    "password": null
  //     },
  //   btnregister:"Register"
  //   }
  // },
  data() {
    return {
      registrasiData: {
        email: null,
        nama: null,
        password: "null",
      },
      password2: "",
      emailValid: false,
      passwordValid: false,
      btnLogin: false,
      success: false,
      btnRegister: true,
      gagal: false,
    };
  },
  methods: {
    inputRegister() {
      let data = this.registrasiData;
      let password1 = data.password;
      let password2 = this.password2;

      this.success = false;
      this.emailValid = false;
      this.passwordValid = false;
      if (password1 == password2) {
        UserService.create(data)
          .then((response) => {
            console.log(response);
            this.registrasiData = {};
            this.password2 = "";
            this.success = true;
            this.btnLogin = true;
            this.btnRegister = false;
            this.emailValid = true
          })
          .catch((e) => {
            console.log(e);
            if (e.response.data.status === 500) {
              this.emailValid = true;
            }
          });
      } else {
        this.passwordValid = true;

      }
    },
  },
};
</script>

<style scope>
.register {
  background: linear-gradient(to left, #8d80df, #6277d6);
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
  background: #8d80df;
  color: #fff;
  font-weight: 600;
  width: 50%;
  cursor: pointer;
}
.register .nav-tabs {
  margin-top: 3%;
  border: none;
  background: #8d80df;
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
