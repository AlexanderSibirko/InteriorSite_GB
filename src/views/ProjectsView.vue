<template>
  <div class="content">
    <InteriorHeader :headerData="headerData"/>

    <InteriorFooter />

    <!-- <div class="example-one"> 
    <vue-awesome-paginate
      :total-items="100"
      :items-per-page="5"
      :max-pages-shown="5"
      v-model="currentPage"
    />
  </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import InteriorHeader from '@/components/Header.vue'
import InteriorFooter from '@/components/Footer.vue'


export default {
  name: 'ProjectsView',
  data() {
        return {
          headerData: {
            pageName: 'Our Project',
            breadCrumbs: [{text: 'Home', route: '/'},
                         {text: 'Project', route: '/projects'}],
            imageSrc: 'img/ProjectHeadPic.png',
            showText: true
          }
        };
    },
  components: {
    InteriorHeader,
    InteriorFooter,
  },
// currentPage: 0,
// setup() {
//     const currentPage = ref(1);
//     return {
//       currentPage,
//     };
//   },
}
</script>

<style lang="sass">
  @import '../assets/globalStyle.sass'  
// /* .example-one .pagination-container {
//   column-gap: 10px;
// }
// .example-one .paginate-buttons {
//   height: 40px;
//   width: 40px;
//   border-radius: 20px;
//   cursor: pointer;
//   background-color: rgb(242, 242, 242);
//   border: 1px solid rgb(217, 217, 217);
//   color: black;
// }
// .example-one .paginate-buttons:hover {
//   background-color: #d8d8d8;
// }
// .example-one .active-page {
//   background-color: #3498db;
//   border: 1px solid #3498db;
//   color: white;
// }
// .example-one .active-page:hover {
//   background-color: #2988c8;
// }
// .example-one .back-button:active,
// .example-one .next-button:active {
//   background-color: #c4c4c4;
// } */
</style>
