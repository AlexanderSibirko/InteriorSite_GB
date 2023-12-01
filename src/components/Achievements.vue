<template>
    <div class="achievements-section">
        <div class="ahievement-item" v-for="achievement in achievementsData" :key="achievement.id">
            <h1 class="displyH"> {{ achievement.value }}</h1>
            <p class="largeP"> {{ achievement.text }} </p>
        </div>
    </div>
</template>

<script>
import achievementsData from "../assets/data/achievementsData.json";

export default {
    name: 'InteriorAchievements',


    data() {
        return {
            achievementsData: achievementsData.achievements,
        };
    },
    // computed: {
    //     achievementsData() {
    //         return this.$store.getters
    //     }
    // }
};
</script>

<style lang="sass" scoped>
    @import '../assets/globalStyle.sass'
    .achievements-section
        display: flex
        justify-content: space-evenly
        background-color: $low_attention_color
        padding-top: 150px
        padding-bottom: 150px
        margin-top: 96px
        .ahievement-item
          display: flex
          align-items: center
          flex-direction: column
          padding: 0px 56px

        .ahievement-item:not(:first-child)
          border-left: solid 1px $attention_color
        .displyH
          @extend  %displyText
          color: $attention_color
        .largeP
          @extend  %pLargeText
          text-align: center
</style>