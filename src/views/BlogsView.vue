<template>
  <div class="content">
    <InteriorHeader :headerData="headerData"/>
      
    <div class="latest-post center">
      <div class="latest-post-head">
        <h1 class="latest-post-main-header">Latest Post </h1>
      </div>

      <div class="latest-post-article">
        <img
          :src="blogs[latestBlog].imageSrc"
          alt="Latest Post Picture"
          class="latest-post-image"
        />
        <div class="latest-post-content">
          <div class="latest-post-content-texts">
            <h1 class="latest-post-header-text">
              {{ blogs[latestBlog].headerText }}
            </h1>
            <div v-html="blogs[latestBlog].shortDesc"></div>
          </div>
          <div class="blogs-presentation-grid-item-content">
            <p class="blogs-presentation-grid-item-date-text">
              {{ blogs[latestBlog].dateText }}
            </p>
            <router-link :to="'/blogDetails/'+blogs[latestBlog].id">
              <button class="blogs-presentation-grid-item-button">></button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

      <div class="blogs center">
      <h1 class="blogs-description-header">Artice & News</h1>
      <div class="blogs-grid">
        <Blog v-for="blog in blogs.slice((currentPage-1)*6,currentPage*6)" :key="blog.id" :blog="blog" />
      </div>
      <div class="blogs-paging"> 
      <vue-awesome-paginate 
      :total-items="blogs.length"
      :items-per-page="6"
      :max-pages-shown="3"
      v-model="currentPage"
      :hide-prev-next-when-ends="true"
      />
      </div> 
      </div>
    <InteriorFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import InteriorHeader from '@/components/Header.vue'
import InteriorFooter from '@/components/Footer.vue'
import BlogsData from '../assets/data/Blogs.json'
import Blog from '@/components/Blog.vue'

// import Paginator from '@/components/Paginator.vue'
import { ref } from "vue";

export default {
  name: 'BlogsView',

  data() {
        return {
          headerData: {
            pageName: 'Articles & News',
            breadCrumbs: [{text: 'Home', route: '/'},
                         {text: 'Blog', route: '/blogs'}],
            imageSrc: 'img/ArticleAndNewsHeadPic.jpg',
            showText: true
          },
          blogs: BlogsData.blogs
        };
    },
  
  computed: {
    latestBlog: () => {return BlogsData.blogs.length -1}
    // blogsShow (pageSize, currentPage) {
    //   return this.blogs.slice((currentPage-1)*pageSize, currentPage*pageSize)
    // }
  },

  components: {
    InteriorHeader,
    InteriorFooter,
    Blog
},

currentPage: 0,
setup() {
    const currentPage = ref(1);
    return {
      currentPage,
    };
  },
 }
</script>

<style lang="sass">
  @import '../assets/globalStyle.sass'  

  .blogs-paging .pagination-container
    column-gap: 10px
  
  .blogs-paging .paginate-buttons
    height: 40px
    width: 40px
    border-radius: 20px
    cursor: pointer
    background-color: white
    border: 1px solid $attention_color
    color: black

  .blogs-paging .paginate-buttons:hover 
    background-color: $attention_color

  .blogs-paging .active-page 
    background-color: $low_attention_color
    border: 1px solid $low_attention_color

  .blogs-paging .active-page:hover 
    background-color: $attention_color

  .blogs-paging .back-button:active,
  .blogs-paging .next-button:active 
    background-color: $attention_color


  .blogs
      margin-top: 96px
      display: flex
      flex-direction: column

  .blogs-description
    display: flex
    align-items: center
    flex-direction: column

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

  .blogs-paging
        margin-top: 50px
        display: flex
        justify-content: center

  .latest-post
    margin-top: 200px

  .latest-post-main-header
        @extend %h1Text

  .latest-post-image
        border-radius: 50px
        height: fit-content

  .latest-post-article
        margin-top: 28px
        padding: 22px
        display: grid
        grid-template-columns: repeat(2,1fr)
        gap: 65px
        border: solid 1px $ligth_border_color
        border-radius: 62px

  .latest-post-content
        display: flex
        flex-direction: column
        justify-content: space-around
        padding-right: 32px
        margin-top: 50px
        margin-bottom: 50px

  .latest-post-header-text
        @extend %h3Text
        margin-bottom: 22px

  .latest-post-description-text
        @extend %pLargeText
        margin-bottom: 22px
    
  .blogs-presentation-grid-item-content
        display: flex
        justify-content: space-between
        margin-top: 30px
        align-items: baseline

  .blogs.presentation-grid-item-date-text
        @extend %pLargeText


  .blogs-presentation-grid-item-button
    @extend %pLargeText
    background-color: $low_attention_color
    border: none
    border-radius: 50%
    width: 52px
    height: 52px
  
  .blogs-presentation-grid-item-button:hover
    background-color: $attention_color
</style>
