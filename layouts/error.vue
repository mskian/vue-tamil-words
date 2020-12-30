<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404" class="title is-4 has-text-centered">
      {{ error.message }}
    </h1>
    <h1 v-else class="title is-1 has-text-centered">
      {{ error.statusCode }} - {{ error.message }}
    </h1>
    <div class="buttons is-centered">
      <nuxt-link to="/" tag="a" class="button is-danger is-rounded">
        Go Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.error-container {
  margin-top: 9em;
  margin-bottom: 9em;
}
</style>
