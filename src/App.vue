<template>
<div class="container">
<div class="row p-5 m-5"></div>
  <!--Register></Register-->

  <h1>Login</h1>

  <br> {{ formFeedback }} <br>

  <form id="login" name="login">
    <div>
      <label for="username">Enter name:</label>
      <input type="text" id="username" name="username" v-model="username">
    </div>
    <div>
      <label for="password">Enter Password:</label>
      <input type="password" id="password" name="password" v-model="password">
    </div>
    <button @click="login" type="button">Submit</button>
  </form>

  <br><br><br>
  
  {{ info }}

  <!--User></User>

  <Projects></Projects>

  <Skills></Skills>

  <Experience></Experience>

  <Contact></Contact-->

<div class="row p-5 m-5"></div>
</div>
</template>

<script>
import axios from 'axios'
// import Register from './components/Register.vue'
/*import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import User from './components/User.vue'*/

//axios.defaults.withCredentials = true; 

export default {
  name: 'App',
  data () {
    return {
      info: null,
      formFeedback: null,
      username: null,
      password: null
    }
  },
  components: {
    //Register
    /*User,
    Projects,
    Skills,
    Experience,
    Contact*/
  },
  methods: {
    update_home() {
        console.log(axios.defaults);
        axios
        .get('http://localhost:5000/')
        .then(response => (this.info = response["data"]))
    },
    login() {
      let object = {
          username: this.username,
          password: this.password
        }

      axios.post("http://localhost:5000/login", object/*, {
          headers: {
            'Content-Type': 'application/json'
          }
        }*/)
        .then(
          (response) => {
            this.formFeedback = response["data"]; 
            this.update_home()
          }, (error) => {
            this.formFeedback = error
          });
      }
  },
  mounted () {
    this.update_home()
  },
}
</script>

<style>

</style>
