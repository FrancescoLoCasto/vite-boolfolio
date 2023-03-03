<script>
   
import AppPost from '../components/AppPost.vue';
import axios from 'axios';

export default {

   name: 'PostList',
   components:{
      AppPost,
   },

   data() {
      return {
         posts: [],
         loading: false,
         urlAddress: 'http://127.0.0.1:8000/api/posts',
      }
   },

   methods: {
      getPosts(){
         axios.get(this.urlAddress,{
            params: {

            }
         })
         .then((response) => {
            this.posts = response.data.results;
         })
         .catch(function (error) {
            console.warn(error);
         });
      }
   },


   created() {
      this.getPosts();
   },
}
</script>



<template lang="">

      <div class="row">
         <div class="col-12">
            <h1>
               Post:
            </h1>
         </div>
      </div>

      <div class="row justify-content-around">
         <AppPost v-for="post in posts" :post="post"/>
      </div>
   
</template>

<style lang="scss">
   
</style>