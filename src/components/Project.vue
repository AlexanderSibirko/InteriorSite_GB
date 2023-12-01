<template>
    <div class="project-item">
          <div class="project-item-image-wrapper">
            <img
              :src="project.imagesSrc"
              alt="project pic"
              class="project-item-image"
            />
          </div>
          <div class="project-item-content">
            <div class="project-item-content-texts">
                <h3 class="project-item-header-text">
                {{ project.projectName }}
                </h3>
                <p class="project-item-date-text">
                {{ project.tagsText }}
                </p>
            </div>
            <button class="project-item-router-button">></button>
          </div>
          
        </div>
</template>

<script>
export default {
    name: 'InteriorProject',
    props: ['project'],
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

    .project-item-content
        margin-top: 40px
        display: flex
        justify-content: space-between

    .project-item-content-texts
        display: flex
        flex-direction: column
        justify-content: space-between

    .project-item-router-button
        @extend %pLargeText
        background-color: $low_attention_color
        border: none
        border-radius: 50%
        width: 70px
        height: 70px
    
    .project-item-header-text
        @extend %h3Text

    .project-item-date-text
        @extend %pLargeText
</style>