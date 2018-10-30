<template>
  <div class="logoGreenWrapper">
    <div id="logoGreen"></div>
  </div>
</template>

<script>
export default {
  name: '',
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logoGreenWrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.875rem 0;
}
#logoGreen{
  width: 6.25rem;
  height: 3.75rem;
  background: url('/imgs/logo-green.png') center center no-repeat;
  background-size: contain;
}
</style>
