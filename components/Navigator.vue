<template>
  <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <div id="nav-anchor"></div> <!--required for the 'navigation behaviour'-->
    <nav class="f6 fw6 ttu tracked">
      <span v-for="section in siteSections">
        <a :href="'#'+section" class="link dim white dib mr3">
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
  nav.stick {
    position: fixed;
    top: 0;
    z-index: 10000;
    margin-top:12px;
  }

  nav span a {
    color:rgb(50,50,50);
    font-weight:700;
  }

  a.nav-active {
    color:#ccc;
  }

</style>
