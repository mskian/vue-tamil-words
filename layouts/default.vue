<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://tamilwords.net' + this.$route.path
        }
      ]
    }
  },
  mounted () {
    /* eslint-disable no-console */
    console.log(
      '%cWe ❤︎ open source!',
      'background-color:white;padding:8px 16px;border-radius:8px;font-size:32px;color:red;'
    )
  }
}
</script>
