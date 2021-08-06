<template>
<div class="row">
  <div class="col">
    <h4 class="display-6 m-5 p-5 text-center">Work Experience</h4>

    <div class="accordion accordion-flush" id="accordionFlushWorkEx">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flushWE-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flushWE-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <strong>Enkelt</strong>
          </button>
        </h2>
        <div id="flushWE-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushWorkEx">
          <div class="accordion-body">
            <dl class="row">
              <dt class="col-sm-3">Term</dt>
              <dd class="col-sm-9">January 2017 - February 2017</dd>

              <dt class="col-sm-3">Role</dt>
              <dd class="col-sm-9">Intern</dd>

              <dt class="col-sm-3">Responsibilities</dt>
              <dd class="col-sm-9">
                <ul>
                  <li>Familiarize and implement technologies used by the company</li>
                  <li>Make internal time-in prototype for company</li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Experience'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
