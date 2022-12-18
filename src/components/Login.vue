<template>
 <div> 
  <div >
    <div class="container mt-5 display-none " style="margin-right: 100px;">
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
                  animation: mover 1s infinite alternate;
                "
              />
            </span>
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12 login_form">
            <div style="margin-top: 30px">
              <h2 class="text-center">LOGIN ACCOUNT</h2>
            </div>
            <hr>
            <div class="container-fluid">
              <div class="row justify-content-center">
                <form control="" class="form-group">
                  <div class="row">
                    <input
                      type="text"
                      name="username"
                      class="form__input bg-light"
                      placeholder="Username"
                    />
                  </div>
                  <div class="row">
                    <input
                      type="password"
                      name="password"
                      class="form__input bg-light"
                      placeholder="Password"
                    />
                  </div>
                  <div class="row ml-5 " style="color:#41aaeb">
                    <router-link to="/dashboard">
                      <button class="btnlogin" >Login </button>
                    </router-link>
                    
                  </div>
                  <div class="row">
                    <p>
                      Don't have an account?
                      <router-link to="/register">Register Here</router-link>
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
export default {
  name: "LoginComponents",
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
  background: linear-gradient(to right, #41aaeb, #78c4d7);
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
  color: #41aaeb;
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
  border-bottom-color: #41aaeb;
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
  color: #41aaeb;
  font-weight: 600;
  margin-top: 1.5em;
  margin-bottom: 1em;
}
.btnlogin:hover,
.btnlogin:focus {
  background-color: #41aaeb;
  color: #fff;
}
</style>
