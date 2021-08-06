<template>
	<UserDisplay></UserDisplay>
	<Objectives></Objectives>

	<!--button class="btn btn-secondary" @click="show = !show">Edit</button>
	<UserForm></UserForm>
	
	<transition name="fade" mode="out-in">
		<div v-else>
			
		</div>
	</transition-->
</template>

<script>
import UserDisplay from '../components/UserDisplay.vue'
//import UserForm from '../components/UserForm.vue'
import Objectives from '../components/Objectives.vue'

export default {
  name: 'User',
  components: {
    //UserForm,
    UserDisplay,
    Objectives
  },
  data () {
    return {
      show: true
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
