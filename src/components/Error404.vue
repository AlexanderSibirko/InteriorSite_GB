<template>
  <div class="Error404-section center">
    <div class="left-section">
      <h1 class="gigantH">404</h1>
      <h2>We are sorry, but the page you requested was not found</h2>
      <router-link to="/">
        <Button>Back To Home
          <svg style="padding-left: 10px;" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg>
        </Button>
        
      </router-link>
      
    </div>
    <div class="right-section">
      <img
        class="Error404pic"
        src="/img/Page404Pic.jpg"
        alt="Error404 fun picture"
      />
    </div>
  </div>
</template>

<script>

  export default {
    name: "InteriorError404",

    data() {
      return {};
    },
  };
</script>

<style lang="sass" scoped>
  @import '../assets/globalStyle.sass'
  .Error404-section
    display: grid
    grid-template-columns: 50% 50%
  
  .left-section
    display: flex
    flex-direction: column
    justify-content: center
    padding-right: 81px

  .gigantH
    @extend %displyText
    font-size: calc(250/$basicFontSize)+rem

    color: $attention_color

  h2
    @extend %h2Text
  
  button        
    @extend %defaultButton
    margin-top: 20px

  img
    border-radius: 0px 0px 0px 350px
</style>
