<template>
<div v-for="(obj,index) in object" :key="index">
  <div class="card mx-auto" style="width: 80%; border: 11px solid #eae7e4;border-radius: 10px; background:white;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px; padding:50px 0 50px 0;">
    <div class="card-body">
      <p class="logo" @click="updateprofile" style="margin-left: auto;margin-right: 90%; width:80px;height:auto;padding-bottom: 5px;"><img src="../assets/default.jpg" alt=""></p>

      <h5 class="card-title" style="font-family: visionlight;
     background: white;
   font-size: 1.0em;
   line-height: 1.25em;
   font-weight: 400;
   letter-spacing: 1.3px;
   text-transform: uppercase; margin-right: 87%;">{{obj.author.username}}
        <button type="button" style="background: #808080;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(58, 55, 55, 0.3);" v-on:click="unfollow(obj.author.id)" v-if="obj.following && obj.author.id != this.id" name="myButton">Following <i class="fa fa-check" aria-hidden="true"></i></button>
        <button type="button" style="background:#4267B2;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(58, 55, 55, 0.3);" @click="follow(obj.author.id)" v-if="!obj.following && obj.author.id != this.id" name="myButton"><i class="fa fa-user-plus" aria-hidden="true"></i> Follow</button>
      </h5>
      <br>
      <p style="font-family: visionbold;
   margin-left:0;
    font-weight: 400;
    text-transform: uppercase;
    font-size: .8em;
    line-height: 1.25em;
    letter-spacing: 3px;">{{obj.date_posted.substr(0, 10)}}</p>
      <h5 style="font-family: visionlight;
   background: white;
 font-size: 1.5em;
 line-height: 1.25em;
 font-weight: 400;
 letter-spacing: 1.5px;
 text-transform: uppercase;">{{obj.title}}</h5>
      <div class="divider__hor--med"></div>
      <p class="card-text">{{obj.content}}.</p>
      <button class="btn btn-primary" @click="updatelike(index,obj.id)" style="background: #4267B2;
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(58, 55, 55, 0.3);"><i class="fa fa-thumbs-up" aria-hidden="true"></i> {{obj.upwote_count}}</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="btn btn-primary" @click="savepost(index,obj.id)" style="background: #4267B2;
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(58, 55, 55, 0.3);"><i class="fa fa-bookmark"></i> Save</button>
    </div>
  </div>

  <br>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ExploreView',
  data() {
    return {
      object: {},
      id: undefined,
      first_name: undefined,
      last_name: undefined,
    }
  },
  beforeCreate() {
    axios.get('http://blogify-webapp.herokuapp.com/api/blog/explore', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + `${localStorage.getItem('access')}`,
      }
    }).then(
      res => {
        this.object = res.data;
      }
    ).catch(
      err => {
        console.log(err.message)
      }
    );
  },
  beforeMount() {
    axios.get('http://blogify-webapp.herokuapp.com/api/user/userdetails/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + `${localStorage.getItem('access')}`,
      }
    }).then(
      res => {
        if (res.status == 200) {
          this.first_name = res.data.first_name;
          this.last_name = res.data.last_name;
          this.id = res.data.id;
        } else {
          this.$router.push('/');
        }
      }
    ).catch(
      err => {
        console.log(err.message)
      }
    );
  },
  methods: {
    updatelike(index, id) {
      const data = {
        id: id,
      }
      axios.post('http://blogify-webapp.herokuapp.com/api/blog/updatelike/', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + `${localStorage.getItem('access')}`,
        }
      }).then(
        res => {
          if (res.status === 200) {
            this.object[index].upwote_count = res.data.upwote_count
          }
        }
      ).catch(
        err => {
          window.alert(err.message);
        }
      )
    },
    savepost(index, id) {
      const data = {
        post: id,
      }
      axios.post('http://blogify-webapp.herokuapp.com/api/blog/addreadlater/', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + `${localStorage.getItem('access')}`
        }
      }).then(
        res => {
          if (res.status === 200) {
            alert("Post has been save to Read Later section.")
          }
        }
      ).catch(
        err => {
          window.alert(err.message);
        }
      )
    },
    unfollow(id) {

      axios.delete('http://blogify-webapp.herokuapp.com/api/blog/unfollow/' + id, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + `${localStorage.getItem('access')}`
        }
      }).then(
        res => {
          if (res.status === 200 || res.status === 301) {
            this.object.forEach(i => {
              if (i.id == id) {
                console.log(i.id)
                i.following = !i.following;
              }
            })
          }
        }
      ).catch(
        err => {
          window.alert(err.message);
        }
      )
    },
    follow(id) {
      const data = {
        following: id
      }
      axios.post('http://blogify-webapp.herokuapp.com/api/blog/follow/', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + `${localStorage.getItem('access')}`
        }
      }).then(
        res => {
          if (res.status === 200) {
            this.object.forEach(i => {
              if (i.id == id) {
                console.log(i.id)
                i.following = !i.following;
              }
            })
          }

        }
      ).catch(
        err => {
          window.alert(err.message);
        }
      )
    },

  },
}
</script>

<style>
body {
  color: #eceaea;
  background: #EAE7E4;
  font-family: 'Roboto', sans-serif;
}

.logo {
  width: 50px;
  margin: auto;
}

.divider__hor--med {
  width: 30px;
  height: 1px;
  background-color: #212322;
  transition: background-color .5s;
  margin: 3px 5px;
  display: inline-block;
}

.logo img {
  width: auto;
  height: 50px;
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
