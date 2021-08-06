<template>
	<div class="row">
		<div class="col text-center p-5 m-5">
			<form>
				<input class="form-control" type="text" id="name" name="name" value="Name"><br>
				<input class="form-control" type="text" id="title" name="title" value="Title"><br>
				<input class="form-control" type="text" id="objective" name="objective" value="Objective"><br>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  name: 'UserForm'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
