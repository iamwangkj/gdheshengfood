<template>
  <div class="nav">
    <div class="navItem">首页</div>
    <div class="navItem">关于我们</div>
    <div class="navLogo">
      <div id="logo"></div>
      <div>广东和盛食品有限公司</div>
    </div>
    <div class="navItem">联系我们</div>
    <div class="navItem">人才招聘</div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav{
  position: fixed;
  top: 0;
  z-index: 999;
  // background-color: #313131;
  color: #39b54a;
  display: flex;
  justify-content: center;
}
.navItem{
  width: 16.25rem;
  height: 4.25rem;
  line-height: 4.25rem;
  background-color: #313131;
  border: 1px solid #fff;
  text-align: center;
  cursor: pointer;
}
.navItem:hover{
  color: #fff;
  background-color: #39b54a;
}
.navLogo{
  width: 16.25rem;
  height: 8.625rem;
  background-color: #313131;
  border: 1px solid #fff;
}
.navLogo div:nth-child(1){

  background-image: url('/imgs/logo.png');
}

</style>
