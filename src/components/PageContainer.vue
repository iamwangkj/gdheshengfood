<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageContainer',
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  width: 62.375rem;
  min-height: 43.75rem;
  padding: 3rem;
  margin: 0 auto;
}
</style>
