<template>
  <div id="main">
    <div id="nav-anchor"></div>
    <!-- map each nav link to a section with corresponding id -->
    <Navigator :sections="['Home', 'About', 'Shows', 'Contact']" />
    <section id="Home">
      <Home />
    </section>
    <section id="About">
      <About />
    </section>
    <section id="Shows">
      <Shows />
    </section>
    <section id="Contact">
      <Contact />
    </section>
  </div>
</template>

<script>
  require('assets/navigation-behaviour.js') // define how the app will respond to user actions
  import Navigator from '~/components/Navigator.vue'
  import Home from '~/components/Home.vue'
  import About from '~/components/About.vue'
  import Shows from '~/components/Shows.vue'
  import Contact from '~/components/Contact.vue'

  export default {
    components: {
      Navigator,
      Home,
      About,
      Shows,
      Contact
    }
  }
</script>
