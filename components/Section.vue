<template>
  <div>
    <div v-if="section === 'Home'">
      <Home/>
    </div>
    <div v-if="section === 'About'">
      <About/>
    </div>
    <div v-if="section === 'Shows'">
      <Shows/>
    </div>
    <div v-if="section === 'Contact'">
      <Contact/>
    </div>
  </div>
</template>

<script>
  import Home from '~components/Home.vue'
  import About from '~components/About.vue'
  import Shows from '~components/Shows.vue'
  import Contact from '~components/Contact.vue'
  export default {
    props: ['section'],
    components: {
      Home,
      About,
      Shows,
      Contact
    }
  }
</script>
