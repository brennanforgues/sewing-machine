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
  // require('~/components/Navigator/navigation.js')
  import Navigator from '~/components/Navigator/Navigator.vue'
  import Home from '~/components/Home/Home.vue'
  import About from '~/components/About/About.vue'
  import Shows from '~/components/Shows/Shows.vue'
  import Contact from '~/components/Contact/Contact.vue'

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
