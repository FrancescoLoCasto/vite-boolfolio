<script>

import axios from 'axios';

export default {
   name: 'AppMain',
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



<template >
   <section>
      <div class="row">
         <div class="col-12">
            <h1>
               Post:
            </h1>
            
            
            <div class="container d-flex flex-wrap">
               <article class="col-6 single-post   card" v-for="post in posts" >
                        <img :src="post.image" alt="">
                     <div class="card-body">
                        <h5 class="card-title">{{post.title}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">{{ post.content }}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                     </div>
               </article>
            </div>
         </div>
      </div>
   </section>
</template>

<style lang="scss" scoped>
   
</style>