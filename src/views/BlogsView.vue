<template>
  <div class="content">
    <InteriorHeader :headerData="headerData"/>
      

      <div class="blogs center">
      <h1 class="blogs-description-header">Artice & News</h1>
      <div class="blogs-grid">
        <Blog v-for="blog in blogs.slice((currentPage-1)*6,currentPage*6)" :key="blog.id" :blog="blog" />
      </div>
      <div class="blogs-paging"> 
      <vue-awesome-paginate 
      :total-items="9"
      :items-per-page="6"
      :max-pages-shown="3"
      v-model="currentPage"
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
            imageSrc: 'img/ArticleAndNewsHeadPic.jpg'
          },
          blogs : BlogsData.blogs
        };
    },
  
  computed: {
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

</style>
