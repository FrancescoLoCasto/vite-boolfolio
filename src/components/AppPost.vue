<script>
export default {
   name: 'AppPost',

   data() {
      return {
         
      }
   },

   props: {
      'post': {
         type: Object,
         required: true,
      },
   }

}
</script>



<template lang="">
               <article class="single-post card w-100">
                           <h3>
                              {{ post.author }}
                           </h3>
                           <p>
                           {{ post.type.name }}
                           </p>
                        <img :src="post.image" alt="" class="card-img-top">
                     <div class="card-body">
                        <h5 class="card-title">{{post.title}}</h5>
                        <p class="card-text">{{ post.content }}</p>
                        <p class="card-text">{{ post.post_date }}</p>
                        <h3 v-for="technology in post.technologies" >
                           {{ technology.name }}
                        </h3>
                        <a href="#" class="btn btn-primary">Read more...</a>
                        <router-link :to="{name: 'post', params: {slug: post.slug}}" class="btn btn-primary">
                           Read more...
                        </router-link>
                     </div>
               </article>
</template>

<style lang="">
   
</style>