<template>
  <div class="Error404-section">
    <div class="left-section">
      <h1 class="gigantH">404</h1>
      <h2>We are sorry, but the page you requested was not found</h2>
      <Button>Back To Home</Button>
    </div>
    <div class="right-section">
      <img
        class="Error404pic"
        src="../assets/img/banner/Page404Pic.jpg"
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
  
</style>
