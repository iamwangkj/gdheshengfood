<template>
  <div class="productWrapper">
    <div>
      <div class="sidebarWrapper">
        <div v-for="(item, index) in sidebar" :key="index" :class="['sidebarItem', { active: item.isActive}]" @click="onClick(item.name, index)">{{item.label}}</div>
      </div>
    </div>
    <div class="product">
      <ProductItem v-for="(item, index) in productGroupData" :key="index" :url="item.url" :name="item.name"></ProductItem>
    </div>
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
import PRODUCTDATA from '../../public/productData'
import _ from 'lodash'

export default {
  name: 'Home',
  data () {
    return {
      routerName: 'vnf',
      sidebar: [
        { name: 'vnf', label: '蔬果干类', isActive: true },
        { name: 'meat', label: '肉类', isActive: false },
        { name: 'plum', label: '梅类', isActive: false },
        { name: 'nut', label: '坚果类', isActive: false },
        { name: 'maybush', label: '山楂类', isActive: false },
        { name: 'meat', label: '豆类', isActive: false }
      ]
    }
  },
  computed: {
    productGroupData () {
      console.warn(PRODUCTDATA, this.routerName)
      return _.get(PRODUCTDATA, this.routerName)
    }
  },
  methods: {
    onClick (routerName, index) {
      console.log(routerName, index)
      this.routerName = routerName
      if (this.sidebar[index].isActive) {
        return false
      } else {
        this.sidebar.forEach(element => {
          element.isActive = false
        })
        this.sidebar[index].isActive = true
      }
    }
  },
  components: {
    ProductItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productWrapper{
  display: flex;
  justify-content: center;
}
.sidebarWrapper{
  width: 8.625rem;
  border: 1px solid #dbdbdb;
  border-bottom: none;
  margin-right: 2rem;
}
.sidebarItem{
  width: 8.625rem;
  height: 3rem;
  border-bottom: 1px solid #dbdbdb;
  color: #39b54a;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.sidebarItem:hover,
.active{
  color: #fff;
  background-color: #39b54a;
}
.product{
  width: 73.15rem;
  height: inherit;
  display: flex;
  flex-wrap: wrap;
}
</style>
