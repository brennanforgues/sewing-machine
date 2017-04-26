<template>
  <div>
    <div v-for="section in siteSections">
      <section :id="section">
        <Section :section="section"/>
      </section>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Section from '~components/Section.vue'
  export default {
    computed: {
      ...mapState({
        siteSections: state => state.siteSections
      })
    },
    components: {
      Section
    }
  }
</script>
