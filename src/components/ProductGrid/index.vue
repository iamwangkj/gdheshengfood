<template>
  <div class="productGrid">
    <ProductItem v-for="(item, index) in data" :key="index" :imgSrc="item.url" :title="item.name"></ProductItem>
  </div>
</template>

<script>
import ProductItem from '../ProductItem'
export default {
  name: 'ProductGrid',
  props: ['data'],
  components: {
    ProductItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.productGrid{
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
}
</style>
