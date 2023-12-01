<template>
  <div class="header-bar center">
      <div class="header-logo">
        <router-link to="/">
          <svg class="logoSVG" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
          </svg><span class="header-logo-text">Interno</span></router-link>
      </div>
      <div class="header-navbar">
        <InteriorNavBar />
      </div>
  </div>
  <router-view/>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
import InteriorNavBar from './components/NavBar.vue';
// import BlogsData from '../assets/data/Blogs.json'

export default {
  name: 'InteriorApp',
  components: {
    InteriorNavBar
  },
  methods: {
    ...mapMutations(['SET_BLOGS_DATA','SET_PROJECTS_DATA','SET_ACHIEVEMENTS_DATA','LOAD_CONTACTS_DATA'])
  },
  computed: {
    ...mapState(['blogs','projects','contactsInfo','achievements']),
    ...mapGetters(['getAllAchievements','getAllBlogs','getBlogsSlice']),
    ...mapActions(['loadBlogs','loadProjects','loadAchievements','loadContactInfo'])
  },
  created() {
    this.SET_BLOGS_DATA(this.loadBlogs)
    this.SET_PROJECTS_DATA(this.loadProjects)
    this.SET_ACHIEVEMENTS_DATA(this.loadAchievements)
    this.LOAD_CONTACTS_DATA(this.loadContactInfo)
  }
}


</script>

<style lang="sass">
  @import './assets/globalStyle.sass'  
  .header-bar
      margin-top: 44px
      padding-top: 6px
      padding-bot: 6px
      display: flex
      justify-content: space-between

  .header-logo-text
      @extend %h2Text
      padding-left: 10px

  .header-navbar
      display: flex
      gap: 64px
</style>
