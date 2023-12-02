<template>
    <InteriorHeader :headerData="headerData"/>
      <div id="vue-blogs" class="blogs-detailed center">
        <div id="blog-articles" class="blogs-detailed__articles">
          <div class="blog-wrapper" v-if="blogs[this.$route.params.id]">
            <div  v-if="checkTags(blogs[this.$route.params.id].blogTags)" v-html="blogs[this.$route.params.id].articleHtml" :blog-tags="blogs[this.$route.params.id].blogTags"></div>
            <h1 class="h1text"> Similar Blogs</h1>
            
            <div class="blog-wrapper" v-for="blog in blogs" :key="blog.id">
              <div  v-if="checkSimilarBlogs(blog.blogTags, blog.id)" v-html="blog.articleHtml" :blog-tags="blog.blogTags"></div>
            </div>
          </div>
        </div>

        <div class="blogs-detailed__tags">
          <h3 class="blogs-detailed__tags-header">Tags</h3>
          <div id="tags-menu" class="blogs-detailed__tags-menu">
            <InteriorTagButton v-for="tag in tags"
            :key="tag.tagName"
            :tag-name="tag.tagName"
            :check-status="tag.checked" @click="changeActiveTag(tag.tagName)"/>
          </div>
        </div>
      </div>
    <InteriorFooter />
  </template>
  
  <script>
  // @ is an alias to /src
  import InteriorHeader from '@/components/Header.vue'
  import InteriorFooter from '@/components/Footer.vue'
  import InteriorTagButton from '@/components/TagButton.vue'
  import BlogsData from '../assets/data/Blogs.json'

    export default {
    name: 'BlogDetailsView',
    data() {
          return {
            headerData: {
              pageName: '',
              breadCrumbs: [{text: '', route: ''},
                           {text: '', route: ''}],
              imageSrc: '../img/BlogDetailedHeadPic.jpg',
              showText: false
              
            },
            blogs: BlogsData.blogs,
            
            currentTag: "Kitchen",
            
            tags: [
            {
              tagName: "Kitchen",
              checked: false,
            },
            {
              tagName: "Bedroom",
              checked: false,
            },
            {
              tagName: "Building",
              checked: false,
            },
            {
              tagName: "Architecture",
              checked: false,
            },
            {
              tagName: "Kitchen Planning",
              checked: false,
            },
            ],
          };
      },

    methods: {
        checkBlogId() {
            return (BlogsData.blogs[this.$route.params.id]) ? true : false
        },

        changeActiveTag (tagName) {
          this.currentTag = tagName;
          this.tags.forEach(tag => {
            (tag.tagName === this.currentTag) ? tag.checked = true : tag.checked = false;
          });
        },

        checkTags (blogTags) {
          return (blogTags.includes(this.currentTag)) ? true : false
        },

        checkSimilarBlogs(blogTags, blogId) {
          if (this.checkTags(blogTags) && blogId != this.$route.params.id) {
            return true
          } else {
            return false
          }
        }
    },
    created() {
        if (this.checkBlogId()) { 
          console.log("all fine")
          this.currentTag = BlogsData.blogs[this.$route.params.id].blogTags[0]
          this.changeActiveTag(this.currentTag)
        } 
        else {
          this.$router.push({ name : "PageNotFoundView"})
        }
    },
    
    components: {
      InteriorHeader,
      InteriorFooter,
      InteriorTagButton
  },
  }
  </script>
  
  <style lang="sass">
    @import '../assets/globalStyle.sass'  
    .blogs-detailed
      margin-top: 200px
      display: grid
      gap: 52px
      grid-template-columns: 2fr 1fr
      
      .blogs-detailed__article
        margin: 16px

      .blog-wrapper
        border: solid 1px $ligth_border_color

      .blogs-detailed__tags-header
        @extend %h3Text

      .blogs-detailed__tags-menu
        margin-top: 24px
        display: flex
        flex-wrap: wrap
        gap: 10px
        row-gap: 30px

    .h1text
        @extend %h1Text
        margin-top: 26px
    .blog__header-text
        @extend %h1Text
        margin-top: 26px

    .blog__small-text
        @extend %pSmallText

    .blog__image
        border-radius: 50px
        margin-top: 40px

    .blog__image-footer
        display: flex
        justify-content: space-between
        margin-top: 40px

    .blog__content-text
        @extend %pLargeText
        margin-top: 26px

    .blog__quote
        margin-top: 36px
        background: $low_attention_color
        border-radius: 50px
        display: flex
        flex-direction: column
        align-items: center
        padding-top: 52px
        padding-bottom: 52px
        .blog__quote-mark
            @extend %displyText
            font-style: italic
            font-size: 200px
            line-height: 100%
            color: $attention_color
            margin-top: -120px

        .blog__quote-text
            @extend %h3Text
            font-style: italic
            color: $attention_color
            text-align: center

    .blog__orderedList
        padding-left: 24px
        counter-reset: item
        list-style-type: none
        .blog__orderedList-item
            @extend %pLargeText
            color: $attention_color
            margin-top: 32px
            display: block
            span
                color: $main_color
        .blog__orderedList-item:before
            content: counter(item) " "
            counter-increment: item
  </style>
  