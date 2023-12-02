<template>
        <div class="tags__button">
            <input
              :id="tagId"
              type="radio"
              name="radio"
              :value="tagName"
              :checked="checked"
            />
            <label @click="$parent.currentTag = tagName" :for="tagId">{{tagName}}</label>
        </div>
</template>

<script>
export default {
    name: 'InteriorTagButton',
    props: ['tagName', 'checkStatus'],
    components: {
    },

    data() {
        return {
        };
    },

    computed: {
        tagId() {
            return "radio-" + this.tagName
        },
        checked() {
            return this.checkStatus
        }
    },
};
</script>

<style lang="sass" scoped>
  @import '../assets/globalStyle.sass'
 .tags__button
    label
        @extend %pSmallText
        padding: 8px 28px
        background-color: $low_attention_color
        border-radius: 10px
        &:hover
            background: $attention_color
    input[type=radio]
        display: none

        &:checked+label
            background: $main_color
            color: $contrast_text_color
</style>