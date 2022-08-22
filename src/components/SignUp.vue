<template>
<div class="signup-form">
  <form>
    <h2>Sign Up</h2>
    <p>Please fill in this form to create an account!</p>
    <hr>
    <div class="form-group">
      <div class="logo" style="width: 80px;
      height: 80px;"><img src="../assets/blogify_logo2.png" alt=""></div>
      <form>
        <hr>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <span class="fa fa-user"></span>
              </span>
            </div>
            <input type="text" v-model="name" class="form-control" name="username" placeholder="Username" required="required">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <span class="fa fa-address-card-o"></span>
              </span>
            </div>
            <input type="text" class="form-control" v-model="firstname" name="firstname" placeholder="First Name" required="required">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <span class="fa fa-address-card-o"></span>
              </span>
            </div>
            <input type="text" class="form-control" v-model="lastname" name="lastname" placeholder="Last Name" required="required">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-paper-plane"></i>
              </span>
            </div>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Email Address" required="required">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input type="text" v-model="password" class="form-control" name="password" placeholder="Password" required="required">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
                <i class="fa fa-check"></i>
              </span>
            </div>
            <input type="text" v-model="confirm" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required">
          </div>
        </div>
        <div class="form-group">
        </div>
      </form>
    </div>
  </form>
</div>
<button type="submit" @click="signup" style="
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );" class="btn btn-primary btn-lg">Sign Up</button>
<br> <br>
<p>Already a user, please <router-link to="/">Log in</router-link>.</p>
</template>
<script>
import axios from 'axios'
export default {
  name: 'SignUp',
  data() {
    return {
      name: undefined,
      email: undefined,
      password: undefined,
      confirm: undefined,
      firstname: undefined,
      lastname: undefined
    }
  },
  methods: {
    signup() {
      const data = {
        username: this.name,
        password: this.password,
        password2: this.confirm,
        first_name: this.firstname,
        last_name: this.lastname,
        email: this.email
      }
      axios.post('http://blogify-webapp.herokuapp.com/api/user/register/', data)
        .then(
          res => {
            if (res.status === 200) {
              alert("You're Signed up, Please log in to continue")
              this.$router.push('/');
            }
          }
        ).catch(
          err => {
            window.alert(err.message);
          }
        )
    }
  }
}
</script>

<style>
body {
  color: #eceaea;
  background: #EAE7E4;
  font-family: 'Roboto', sans-serif;
}

.logo {
  width: 80px;
  margin: auto;
}

.logo img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #5f5f5f,
    0px 0px 0px 5px #ecf0f3,
    8px 8px 15px #a7aaa7,
    -8px -8px 15px #fff;
}

.form-control {
  font-size: 15px;
}

.form-control,
.form-control:focus,
.input-group-text {
  border-color: #e1e1e1;
}

.form-control,
.btn {
  border-radius: 3px;
}

.signup-form {
  width: 400px;
  margin: 0 auto;
  padding: 30px 0;
}

.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}

.signup-form h2 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
}

.signup-form hr {
  margin: 0 -30px 20px;
}

.signup-form .form-group {
  margin-bottom: 20px;
}

.signup-form label {
  font-weight: normal;
  font-size: 15px;
}

.signup-form .form-control {
  min-height: 38px;
  box-shadow: none !important;
}

.signup-form .input-group-addon {
  max-width: 42px;
  text-align: center;
}

.signup-form .btn,
.signup-form .btn:active {
  font-size: 16px;
  font-weight: bold;
  background: #19aa8d !important;
  border: none;
  min-width: 140px;
}

.signup-form .btn:hover,
.signup-form .btn:focus {
  background: #179b81 !important;
}

.signup-form a {
  color: #fff;
  text-decoration: underline;
}

.signup-form a:hover {
  text-decoration: none;
}

.signup-form form a {
  color: #19aa8d;
  text-decoration: none;
}

.signup-form form a:hover {
  text-decoration: underline;
}

.signup-form .fa {
  font-size: 21px;
}

.signup-form .fa-paper-plane {
  font-size: 18px;
}

.signup-form .fa-check {
  color: #fff;
  left: 17px;
  top: 18px;
  font-size: 7px;
  position: absolute;
}
</style>
