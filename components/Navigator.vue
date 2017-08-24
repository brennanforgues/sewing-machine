<template>
  <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <div id="nav-anchor"></div> <!--required for the 'navigation behaviour'-->
    <nav class="f6 fw6 ttu tracked">
      <span v-for="section in siteSections">
        <a :href="'#'+section" class="nav-link dim white dib mr3">
          <span>{{section}}</span>
        </a>
      </span>
    </nav>
  </header>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        siteSections: state => state.siteSections
      })
    }
  }
</script>

<style>
  .nav-link {
    text-decoration: none;
  }
</style>
