<template>
  
  <h1>Register User</h1>
  <br>
  {{ formFeedback }}
  <br>
  <form id="registration" name="registration">
    <div>
      <label for="username">Enter name:</label>
      <input type="text" id="username" name="username" v-model="username">
    </div>
    <div>
      <label for="password">Enter Password:</label>
      <input type="password" id="password" name="password" v-model="password">
    </div>
    <div>
      <label for="vrf_password">Confirm Password:</label>
      <input type="password" id="vrf_password" name="vrf_password" v-model="vrf_password">
    </div>
    <button @click="register" type="button">Submit</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      formFeedback: null,
      username: null,
      password: null,
      vrf_password: null
    }
  },
  methods: {
    register() {
      if (this.password == this.vrf_password) {
        let object = {
          username: this.username,
          password: this.password,
          vrf_password: this.vrf_password
        }
        // console.log(JSON.stringify(object));

        axios.post("http://localhost:5000/register", object, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(
            (response) => {this.formFeedback = response["data"]}, 
            (error) => {this.formFeedback = error}
          );
      } else {
        this.formFeedback = "Passwords don't match. Try again"
      }
    }
  }
}
</script>

<style>

</style>
