<template>
<h2 style="font-family: visionbold;
 margin-right:auto;
margin-left:auto;
 font-weight: 400;
 text-transform: uppercase;
 font-size: 2.2em;
 line-height: 1.25em;"> Log in Page</h2>
<br>
<br>
<div class="form-group">
  <div class="logo">
    <img src="../assets/blogify_logo2.png" style="width: 80px;
          height: 80px;" alt="">
  </div>
  <br><br>
  <input v-model="name" class="form-control" placeholder="Username" style="width:60%;margin-left: auto;
margin-right: auto;">

</div>
<div class="form-group">
  <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style="width:60%;margin-left: auto;
margin-right: auto;">
</div>
<button type="submit" @click='work' class="btn btn-primary" style="
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );">Submit</button>
<br>
<br>
Don't have an account - <router-link to="/signup">Sign Up</router-link>
</template>
<script>
import axios from 'axios'
export default {
  name: 'LogIn',
  data() {
    return {
      name: undefined,
      password: undefined,
    }
  },
  beforemount() {
    alert("beforeunload");
  },
  methods: {
    work() {
      const data = {
        username: this.name,
        password: this.password
      }
      axios.post('http://blogify-webapp.herokuapp.com/api/token/', data)
        .then(
          res => {
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);
            alert('token saved');
            if (res.status === 200) {
              this.$router.push('/dashboard');
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
  height: 80px;
  margin: auto;
}

.logo img {
  width: 80px;
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

.divider__hor--med {
  width: 30px;
  height: 1px;
  background-color: #212322;
  transition: background-color .5s;
  margin: 3px 5px;
  display: inline-block;
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
