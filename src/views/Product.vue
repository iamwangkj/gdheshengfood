<template>
  <div class="product">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in 4" :key="item">
        <img width="800" height="300" src="/imgs/slider.jpg" alt="">
      </el-carousel-item>
    </el-carousel>

    <el-row>
      <el-col :span="4">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical"
          @select="handleSelect">
          <el-menu-item index="vnf">
            <i class="el-icon-menu"></i>
            <span slot="title">蔬果类</span>
          </el-menu-item>
          <el-menu-item index="meat">
            <i class="el-icon-menu"></i>
            <span slot="title">肉类</span>
          </el-menu-item>
          <el-menu-item index="plum">
            <i class="el-icon-document"></i>
            <span slot="title">梅类</span>
          </el-menu-item>
          <el-menu-item index="nut">
            <i class="el-icon-setting"></i>
            <span slot="title">坚果类</span>
          </el-menu-item>
          <el-menu-item index="bean">
            <i class="el-icon-setting"></i>
            <span slot="title">豆类</span>
          </el-menu-item>
          <el-menu-item index="maybush">
            <i class="el-icon-setting"></i>
            <span slot="title">山楂类</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" class="productList">
        <ProductGrid :data="router"></ProductGrid>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProductGrid from '../components/ProductGrid'
import ProductData from '../../public/productData.js'

export default {
  name: 'Product',
  data () {
    return {
      activeIndex: 'vnf'
    }
  },
  computed: {
    router () {
      console.log(ProductData[this.activeIndex])
      return ProductData[this.activeIndex]
    }
  },
  methods: {
    handleSelect (index, indexPath) {
      console.log(index)
      this.activeIndex = index
    }
  },
  components: {
    ProductGrid
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-menu-vertical {
  height: 700px;
}

.productList {
  height: 700px;
  overflow: auto;
}
</style>
