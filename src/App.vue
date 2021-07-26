<template>
<div class="container">
<div class="row p-5 m-5"></div>

  <User></User>

  <Objectives></Objectives>

  <Projects></Projects>

  <Skills></Skills>

  <Experience></Experience>

  <Contact></Contact>

<div class="row p-5 m-5"></div>
</div>
</template>

<script>
import User from './components/User.vue'
import Objectives from './components/Objectives.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    User,
    Objectives,
    Projects,
    Skills,
    Experience,
    Contact
  }
}
</script>

<style>

</style>
