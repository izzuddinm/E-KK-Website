<template>
 <div> 
  <div >
    <div class="container mt-5 display-none " style="margin-right:30px;">
      <div class="row">
      </div>
      <div class="container-fluid mt-2">
        <div class="row main-content text-center">
          <div class="col-md-4 text-center company__info">
            <span class="company__logo">
              <h4>E-KTP Website</h4>
              <img
                src="../assets/ktp.png"
                class="w-100"
                style="
                width:350px;
                  -webkit-animation: mover 2s infinite alternate;
                  animation: mover 1s infinite alternate; "
              />
            </span>
          </div>
          <div @submit.prevent="login" class="col-md-8 col-xs-12 col-sm-12 login_form">
            <div style="margin-top: 30px">
              <h2 class="text-center">LOGIN ACCOUNT</h2>
            </div>
            <hr>
            <div class="container-fluid">
              <div class="row justify-content-center">
                <form control="" class="form-group">
                  <div class="row">
                    <input
                    v-model="dataLogin.email"
                      type="text"
                      name="username"
                      class="form__input bg-light"
                      placeholder="Email"
                    />
                  </div>
                  <div class="row">
                    <input
                    v-model="dataLogin.password"
                      type="password"
                      name="password"
                      class="form__input bg-light"
                      placeholder="Password"
                    />
                  </div>
                  <p v-if="massage" class="text-danger">Username / Password anda Salah</p>
                  <div class="row ml-5 " style="color:#41aaeb">
                  
                      <button type="submit" class="btnlogin" >Login </button>
                  
                    
                  </div>
                  <div class="column ml-2">
                    <p>
                      Belum Punya Akun?
                      <router-link to="/register" class="nav-link">Daftar Disini</router-link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
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
  name: "LoginComponents",
  data() {
    return {
      dataLogin: {
        "email": null,
        "password": null
      },
      massage: false
    }
  },
  methods: {
    login() {
      let data = this.dataLogin;
      UserService.login(data)
        .then(response => {
          console.log(response);
          this.$router.push("/dashboard")
        })
        .catch(e => {
          console.log(e)
          this.massage = true
      })
    }
  }
};
</script>

<style scope>

.main-content {
  width: 70%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  margin: 5em auto;
  display: flex;
}
.company__info {
  background: linear-gradient(to left, #697dd6,#9371d6);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}
.fa-android {
  font-size: 3em;
}
@media screen and (max-width: 640px) {
  .main-content {
    width: 90%;
  }
  .company__info {
    display: none;
  }
  .login_form {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}
@media screen and (min-width: 642px) and (max-width: 800px) {
  .main-content {
    width: 70%;
  }
}
.row > h2 {
  color: #8d80df;
}
.login_form {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
form {
  padding: 0 2em;
}
.form__input {
  width: 300px;
  border: 0px solid transparent;
  border-radius: 0;
  border-bottom: 1px solid #aaa;
  padding: 1em 0.5em 0.5em;
  padding-left: 2em;
  outline: none;
  margin: 1.5em auto;
  transition: all 0.5s ease;
}
.form__input:focus {
  border-bottom-color: #8d80df;
  box-shadow: 0 0 5px rgba(0, 80, 80, 0.4);
  border-radius: 4px;
}
.btnlogin {
  transition: all 0.5s ease;
  width: 120px;
  height: 40px;
  border-radius: 30px;
  margin-left: 30px;
  border: 0px;
  color: #8d80df;
  margin-top: 1.5em;
  margin-bottom: 1em;
}
.btnlogin:hover,
.btnlogin:focus {
  background-color: #8d80df;
  color: #fff;
}
</style>
