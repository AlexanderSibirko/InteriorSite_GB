<template>
  <div class="home">
    <InteriorGettingStarted />

    <div class="projects center">
      <div class="projects-description">
        <h1 class="projects-description-header">Follow Our Projects</h1>
        <p class="projects-decription-text">It is a long established that a reader will be distracted by the of readeble content of page looking at its layout points.</p>
      </div>
      <div class="projects-grid">
        <Project class="projects-grid-one" :project="projects[0]" />
        <Project class="projects-grid-two" :project="projects[1]" />
        <Project class="projects-grid-three" :project="projects[2]" />
        <Project class="projects-grid-four" :project="projects[3]" />
      </div>
    </div>

    <InteriorAchievements class="center"/>

    <div class="blogs center">
      <div class="blogs-description">
        <h1 class="blogs-description-header">Artice & News</h1>
        <p class="blogs-decription-text">It is a long established that a reader will be distracted by the of readeble content of page looking at its layout points.</p>
      </div>
      <div class="blogs-grid">
        <Blog v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
    </div>

    <InteriorFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import InteriorGettingStarted from '@/components/GettingStarted.vue'
import InteriorAchievements from '@/components/Achievements.vue'
import InteriorFooter from '@/components/Footer.vue'
import Blog from '@/components/Blog.vue'
import Project from '@/components/Project.vue'

import blogsData from '@/assets/data/Blogs.json'
import projectsData from '@/assets/data/Projects.json'


export default {
  name: 'HomeView',
  components: {
    InteriorGettingStarted,
    InteriorFooter,
    InteriorAchievements,
    Project,
    Blog
  },
  data() {
        return {
          blogs: blogsData.blogs.slice(-3),
          projects: projectsData.projects.slice(0,4)
        };
    },
 }
</script>

<style lang="sass">
  @import '../assets/globalStyle.sass'  

  .projects
    margin-top: 96px
    margin-bottom: 96px
    display: flex
    flex-direction: column

    .projects-description
        display: flex
        align-items: center
        flex-direction: column

    .projects-description-header
        @extend %h1Text

    .projects-description-text
        @extend %pLargeText
        max-width: 750px
        text-align: center

    .projects-grid
        margin-top: 92px
        display: grid
        grid-column-gap: 104px
        grid-row-gap: 56px
        grid-template-columns: repeat(2, minmax(0px, 1fr))

  .projects-grid-one img
    border-radius: 0px 80px 0px 0px
  
  .projects-grid-two img
    border-radius: 80px 0px 0px 0px

  .projects-grid-three img
    border-radius: 0px 0px 80px 0px

  .projects-grid-four img
    border-radius: 0px 0px 0px 80px

  .blogs
      margin-top: 96px
      display: flex
      flex-direction: column

  .blogs-description
    display: flex
    align-items: center
    flex-direction: column
        // &__uncenter-align-items
        //     align-items: flex-start

  .blogs-description-header
        @extend %h1Text

  .blogs-description-text
        @extend %pLargeText
        max-width: 750px
        text-align: center

  .blogs-grid
        margin-top: 52px
        display: grid
        grid-template-columns: repeat(3, 1fr)
        gap: 26px


</style>
