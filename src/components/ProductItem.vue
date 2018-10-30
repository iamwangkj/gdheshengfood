<template>
  <div class="productItem">
    <img class="itemImg" :src="url" alt="load failed">
    <div class="itemnName">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['url', 'name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.productItem{
  width: 16.25rem;
  height: 20.625rem;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin: 0 1rem;
}
.itemImg{
  display: block;
  box-sizing: border-box;
  border-radius: .35rem;
  width: 16rem;
  height: 16rem;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.itemnName{
  width: 16.25rem;
  height: 3.75rem;
  line-height: 3.75rem;
  color: #4b624d;
  text-align: center;
}

.itemImg:hover{
  border: 2px solid #39b54a;
  border-radius: .35rem;
}
.itemImg:hover + .itemnName{
  color: #39b54a;
}
</style>
