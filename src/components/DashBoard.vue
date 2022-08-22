<template>
<nav class="navbar navbar-expand-lg navbar-dark  glass">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-0 mb-lg-0">
        <li class="nav-item">
          <img src="../assets/blogify_logo.png" alt="" class="logo" style="height:60px;width:60px;">
        </li>
      </ul>
      <ul class="navbar-nav me-auto mb-0 mb-lg-0" style="margin-left: auto;
margin-right: 0;">
        <li class="nav-item" style="padding : 0 0 0 20px;">
          <router-link class="nav-link active" aria-current="page" to="/dashboard">My Feed</router-link>
        </li>
        <li class="nav-item" style="padding : 0 0 0 20px;">
          <router-link class="nav-link active" aria-current="page" to="/explore">Explore</router-link>
        </li>
        <li class="nav-item" style="padding : 0 0 0 20px;">
          <router-link class="nav-link active" aria-current="page" to="/readlater">Saved<i class="fa fa-list" aria-hidden="true"></i></router-link>

        </li>
        <li class="nav-item" style="padding : 0 0 0 20px;">
          <router-link class="nav-link active" aria-current="page" to="/createpost">Create<i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link>
        </li>
        <li class="nav-item dropdown" style="padding : 0 0 0 20px;">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="../assets/default.jpg" alt="" class="user">
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" @click="upddateprofile">Update Profile</a>
            <a class="dropdown-item" @click="logout">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view />
</template>

<script>
/* eslint-disable vue/no-unused-components */
import MyFeed from './MyFeed.vue'
import ExploreView from './ExploreView.vue'
import CreatePost from './CreatePost.vue'
import ReadLater from './ReadLater.vue'
export default {
  name: 'DashBoard',
  components: {
    MyFeed,
    ExploreView,
    CreatePost,
    ReadLater,
  },
  data() {
    return {}
  },
  methods: {
    logout() {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      this.$router.push('/');
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

.glass {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  background: #454545;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.user {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.logo {
  width: 60px;
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
