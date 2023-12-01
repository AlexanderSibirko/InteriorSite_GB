<template>
    <header class="page-head">
      <img
        :src="headerData.imageSrc"
        alt="Header image"
        class="page-head__image"
      />
      <div class="page-head__content">
        <h1 class="page-head__header-text">{{ headerData.pageName }}</h1>
        <div class="page-head__breadcrumbs">
            <router-link v-for="link in headerData.breadCrumbs" :key="link.text"
            class:="nav-item" :to=link.route>{{ link.text }}</router-link>
        </div>
      </div>
    </header>
</template>

<script>
// import navBarData from "../assets/data/navBarData.json";
// import NavBar from "./NavBar.vue"
// import LogoSVG from '../assets/img/icons/Logo.svg'

export default {
    name: 'InteriorHeader',
    props: ['headerData'],
    components: {
        // NavBar
    },

    data() {
        return {
            // navBarData: navBarData.NavBar,
        };
    },
};
</script>

<style lang="sass" scoped>
    @import '../assets/globalStyle.sass'  
    .page-head
        margin-top: 45px
        display: flex
        flex-direction: row
        justify-content: center
        position: relative
    
        .page-head__content
            min-width: 500px
            background-color: white
            border-radius: 36px 36px 0px 0px
            position: absolute
            bottom: 0px
            padding-top: 40px
            padding-bottom: 40px

        .page-head__header-text
            @extend %h1Text
            text-align: center

        .page-head__breadcrumbs
            display: flex
            justify-content: center

        a
            @extend %pLargeText

        a:not(:last-child)::after
            content: " / "
            white-space: pre
</style>