<template>
  <div class="wrapper">
    <el-menu :default-active="defaultIndex" :mode="mode" @select="handleSelect">
      <el-menu-item v-for="(item, index) in router" :key="index" :index="item.name">{{item.label}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'PageNav',
  data () {
    return {}
  },
  methods: {
    handleSelect (index, indexPath) {
      // console.warn(index, indexPath)
      this.$router.push(indexPath[0])
    }
  },
  props: ['router', 'mode', 'defaultIndex']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
