<template>
    <div class = "footer center">
        <div class="footer-about">
            <div class="header-logo">
            <router-link to="/">
            <svg class="logoSVG" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
            </svg><span class="header-logo-text">Interno</span></router-link>
            </div>
            <h3  class="footer-about-text">{{ footerData.about.text }}</h3>
            <div class="social-links">
                <a class="social-link" :href= "'https://www.'+socialLink.href" v-for="socialLink in footerData.about.socialLinks" :key="socialLink.id">
                    <img :src="socialLink.svg" alt="social link icon">
                </a> 
            </div>
        </div>

        <div class="footer-navbar">
            <h3 class="footer-navbar-header">Pages</h3>
            <NavBar />
        </div>

        <div class="footer-contacts">
            <h3 class="footer-contacts-header" >Contact</h3>
            <p class="largeP">{{ footerData.contacts.address }}</p>
            <p class="largeP">{{ footerData.contacts.email }}</p>
            <p class="largeP">{{ footerData.contacts.phone }}</p>
        </div>
    </div>
</template>

<script>

import footerData from "../assets/data/footerData.json";
import NavBar from "./NavBar.vue"

export default {
    name: 'InteriorFooter',
    components: {
        NavBar
    },

    data() {
        return {
            footerData: footerData.footerData,
        };
    },
};
</script>

<style lang="sass" scoped>
    @import '../assets/globalStyle.sass'    
    .footer
        display: grid
        grid-template-columns: repeat(3, 1fr)
        margin-top: 96px
    
    .footer-about
        display: flex
        flex-direction: column
    .footer-about-text
        @extend %pLargeText
        margin-top: 18px
        margin-bottom: 30px
    .footer-navbar
        display: flex
        flex-direction: column
        padding-left: 96px
    
    .footer-navbar-header, .footer-contacts-header
      @extend %h3Text
      margin-bottom: 26px
        
    .largeP
      @extend %pLargeText
      margin-bottom: 26px

    .social-link
        padding-left: 15px

    .header-logo-text
      @extend %h2Text
      padding-left: 10px
</style>