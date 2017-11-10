<template>
  <div id="main">
    <div class="container">
      <div id="nav-anchor"></div>
      <Navigator/>
      <div id="content">
        <Content/>
      </div>
    </div>
  </div>
</template>

<script>
  require('~assets/navigation-behaviour.js') // define how the app will respond to user actions
  import Navigator from '~components/Navigator.vue'
  import Content from '~components/Content.vue'

  export default {
    components: {
      Navigator,
      Content
    }
  }
</script>

<style>


</style>
