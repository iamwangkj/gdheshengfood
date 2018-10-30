<template>
  <div class="nav">
    <router-link to="/home">
      <div class="navItem">首页</div>
    </router-link>
    <router-link to="/about">
      <div class="navItem">关于我们</div>
    </router-link>
    <div class="navLogo">
      <div id="logo"></div>
      <div>广东和盛食品有限公司</div>
    </div>
    <router-link to="/contact">
      <div class="navItem">联系我们</div>
    </router-link>
    <router-link to="/recruit">
      <div class="navItem">人才招聘</div>
    </router-link>
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
  color: #39b54a;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 999;
  left: 50%;
  margin-left: -40.625rem;
}
a{
  text-decoration: none;
  color: #39b54a;
}
.navItem{
  box-sizing: border-box;
  width: 16.25rem;
  height: 4.25rem;
  line-height: 4.25rem;
  background-color: #313131;
  border: 1px solid #fff;
  text-align: center;
  cursor: pointer;
}
.navItem:hover,
.router-link-active .navItem{
  color: #fff;
  background-color: #39b54a;
}
.navLogo{
  width: 16.25rem;
  height: 8.625rem;
  background-color: #313131;
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#logo {
  width: 8.125rem;
  height: 5rem;
  background-image: url('/imgs/logo.png');
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}

</style>
