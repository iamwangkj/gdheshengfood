<template>
  <div class="productItem">
    <img class="productItemImg" :src="imgSrc" alt="loading failed">
    <!-- <div class="productImgItem" style></div> -->
    <p class="productItemLabel">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  data () {
    return {}
  },
  props: ['imgSrc', 'title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productItem{
  margin: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  transition: all 0.5s;
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
.productItemImg{
  width: 150px;
  height: 150px;
}

.productItemLabel{
  width: 150px;
  text-align: center;
  background-color: #E5CB96;
  padding: 1rem;
}
.productItem:hover{
  transform: scale(1.1)
}
</style>
