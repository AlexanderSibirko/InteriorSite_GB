<template>
    <div class="blogs-item">
          <div class="blog-item-image-wrapper">
            <img
              :src="blog.imageSrc"
              alt="blog pic"
              class="blogs-item-image"
            />
            <p class="blogs-item-tag-overimage">
              {{ blog.tagText }}
            </p>
          </div>
          <h3 class="blogs-item-header-text">
              {{ blog.headerText }}
          </h3>
          <div class="blogs-item-content">
            <p class="blogs-item-date-text">
              {{ blog.dateText }}
            </p>
            <router-link :to="'/blogDetails/'+blog.id">
                <button class="blogs-item-router-button">></button>
           </router-link>
          </div>
        </div>
</template>

<script>
export default {
    name: 'InteriorBlog',
    props: ['blog'],
    components: {
    },

    data() {
        return {
        };
    },
};
</script>

<style lang="sass" scoped>
  @import '../assets/globalStyle.sass'

  .blogs-item-router-button
    @extend %pLargeText
    background-color: $low_attention_color
    border: none
    border-radius: 50%
    width: 52px
    height: 52px

  .blogs-item-router-button:hover
    background-color: $attention_color
  .blogs-item
    border-radius: 62px
    border: solid 1px $ligth_border_color
    padding: 20px
    display: flex
    flex-direction: column

  .blogs-item:nth-child(even)
    background-color: $low_attention_color
    button
      background-color: white
    button:hover
      background-color: $attention_color

  .blog-item-image-wrapper
    position: relative
    margin-bottom: 20px

  img
    max-width: 340px
  .blogs-item-image
    border-radius: 45px 45px 0px 0px
    z-index: -5

  .blogs-item-tag-overimage
    position: absolute
    background-color: white
    left: 20px
    bottom: 20px
    padding: 5px
    border-radius: 8px 8px 8px 0px
    z-index: 10

  .logs-item-header-text
    @extend %h3Text

  .blogs-item-content  
    display: flex
    justify-content: space-between
    margin-top: 30px
    align-items: baseline

  .blogs-item-date-text
    @extend %pLargeText

</style>