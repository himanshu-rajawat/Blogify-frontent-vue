<template>
<h2 style="font-family: visionbold;
 margin-right:auto;
margin-left:auto;
 font-weight: 400;
 text-transform: uppercase;
 font-size: 2.2em;
 line-height: 1.25em;">Hey {{first_name}}! Create a Brand New Post</h2>
<h5 style="font-family: visionbold;
 margin-right:auto;
margin-left:auto;
 font-weight: 400;
 text-transform: uppercase;
 font-size: 1em;
 line-height: 1.25em;">Scribble Ideas When They Arrive.</h5>
<div class="divider__hor--med"></div>
<br>
<br>
<div class="form-group">
  <p style="color:#7D7470;font: 15px gentium basic;">Choose a Creative Title:</p>
  <input v-model="title" class="form-control" placeholder="Title" style="width:60%;margin-left: auto;
margin-right: auto;">
<br>
<br>
  <p style="color:#7D7470;font: 15px gentium basic;">Write Content of Your Post Here:</p>
  <input  v-model="content" class="form-control" placeholder="" style="width:60%;height:200px;margin-left: auto;
margin-right: auto;">
<br>
  <button type="submit" @click='submit' class="btn btn-primary" style=";
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );">Submit</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreatePost',
  data() {
    return {
      title: undefined,
      content: undefined,
      id:undefined,
      username:undefined,
      first_name:undefined,
      last_name:undefined,
    }
  },
  beforeCreate() {
    axios.get('http://blogify-webapp.herokuapp.com/api/user/userdetails/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + `${localStorage.getItem('access')}`,}
      }).then(
        res => {
          if(res.status==200){
          this.first_name = res.data.first_name;
          this.last_name = res.data.last_name;
          this.id = res.data.id;
        }
        else{
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
    submit() {
      const data = {
        title: this.title,
        content: this.content
      }
      axios.post('http://blogify-webapp.herokuapp.com/api/blog/createpost/', data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + `${localStorage.getItem('access')}`,
          }
        })
        .then(
          res => {
            if (res.status === 200) {
              alert("post created");
              this.$router.push('/dashboard');
            }
             else {
              alert("error while posting please try again")
            }
          })
        }
    }
  }
</script>

<style>
.divider__hor--med {
  width: 30px;
  height: 1px;
  background-color: #212322;
  transition: background-color .5s;
  margin: 3px 5px;
  display: inline-block;
}
::placeholder {
  postion:absolute
}
</style>
