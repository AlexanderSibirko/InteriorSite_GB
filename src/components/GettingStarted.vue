<template>
    <div class="GettingStarted center">
    <img
       src="@\assets\img\banner\GettingStartedPic.jpg"
       alt="GettingStarted-picture"
       class="GettingStarted-image"
    />

    <div class="GettingStarted-content">
       <h1 class="GettingStarted-header">Let Your Home Be Unique</h1>
       <p class="GettingStarted-description">
         There are many variations of the passages of lorem Ipsum
         fromavailable, majority.
       </p>
       <button class="large-button">Get Started <svg style="padding-left: 10px;" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
</button>
     </div>
   </div>

</template>

<script>

export default {
    name: 'InteriorGettingStarted',
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
    .GettingStarted
        margin-top: 60px
        display: flex
        flex-direction: column
        justify-content: center
        position: relative

    .GettingStarted-content
        position: absolute
        margin-left: 52px
        max-width: 450px

    .GettingStarted-header
        @extend %h1Text
        font-size: calc(65/$basicFontSize)+rem
        margin-bottom: 18px

    .GettingStarted-description
        @extend %pLargeText

    .large-button
        @extend %defaultButton
        margin-top: 20px

</style>