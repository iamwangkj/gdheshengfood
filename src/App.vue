<template>
  <div id="app">
    <PageHeader></PageHeader>
    <Nav :router="router" mode="horizontal" :defaultIndex="router[0].name"></Nav>
    <PageMain>
      <router-view></router-view>
    </PageMain>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import PageMain from './components/PageMain'
import Nav from './components/PageNav'

export default {
  name: 'App',
  data () {
    return {
      router: [
        // {
        //   label: '首页',
        //   name: 'home'
        // },
        {
          label: '产品',
          name: 'product'
        },
        {
          label: '人才招聘',
          name: 'recruit'
        },
        {
          label: '关于我们',
          name: 'about'
        },
        {
          label: '联系我们',
          name: 'contact'
        }
      ]
    }
  },
  components: {
    PageHeader,
    PageFooter,
    PageMain,
    Nav
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
