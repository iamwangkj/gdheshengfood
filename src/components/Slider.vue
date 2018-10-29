<template>
  <div class="">
    <el-carousel :interval="3000" arrow="hover" trigger="click">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="/imgs/slider.jpg" alt="" class="sliderItem">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
