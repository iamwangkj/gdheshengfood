<template>
  <div id="app">
    <Slider></Slider>
    <NavBar></NavBar>
    <LogoGreen></LogoGreen>
    <router-view></router-view>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Slider from './components/Slider'
import PageFooter from './components/PageFooter'
import NavBar from './components/NavBar'
import LogoGreen from './components/LogoGreen'
import _ from 'lodash'

export default {
  name: 'App',
  data () {
    return {}
  },
  mounted () {
    window.onresize = _.debounce(function () {
      const deviceWidth = document.documentElement.clientWidth
      const defaultFontSize = 16
      document.documentElement.style.fontSize = (deviceWidth / 1920 * defaultFontSize) + 'px'
    }, 50)
  },
  components: {
    Slider,
    NavBar,
    PageFooter,
    LogoGreen
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #606266;
  width: 100%;
}
</style>
