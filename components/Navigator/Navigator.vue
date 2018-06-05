<template>
  <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <nav class="f6 fw6 ttu tracked">
      <span v-for="section in sections">
        <a :href="'#'+section" @click.prevent="scrollToSection(section)" class="nav-link dim white dib mr3 mobile-sm-spacing">
          <span>{{section}}</span>
        </a>
      </span>
    </nav>
  </header>
</template>

<script>
  export default {
    props: ['sections'],
    methods: {
      scrollToSection: function (section) {
        const elementOffset = document.getElementById(section).offsetTop
        window.scroll({top: elementOffset, behavior: 'smooth'})
      }
    }
  }
</script>

<style>
  .nav-link {
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    .mobile-sm-spacing {
      margin-right: 0.5rem;
    }
  }

</style>
