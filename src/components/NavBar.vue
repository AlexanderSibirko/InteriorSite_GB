<template>
        <router-link class:="nav-item" to="/">Home</router-link>
        <router-link class:="nav-item" to="/projects">Project</router-link>
        <router-link class:="nav-item" to="/blogs">Blogs</router-link>
</template>

<script>

export default {
    name: 'InteriorNavBar',

    data() {
        return {
        };
    },
};

</script>

<style lang="sass" scoped>
    @import '../assets/globalStyle.sass'  
    a
        @extend %pLargeText
        text-decoration: none

</style>