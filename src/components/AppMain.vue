<script>

import axios from 'axios';

export default {
   name: 'AppMain',
   data() {
      return {
         post: [],
         loading: false,
         urlAddress: 'http://127.0.0.1:8000/api/posts',
      }
   },

   methods: {
      getPost(){
         axios.get(this.urlAddress,{
            params: {

            }
         })
         .then(function (response) {
            console.log(response);
         })
         .catch(function (error) {
            console.warn(error);
         });
      }
   },


   created() {
      this.getPost();
   },
}
</script>



<template >
   <section>
      <div class="container">
         <div class="row">
            <div class="col-12">
               <h1>
                  Hello
               </h1>
            </div>
         </div>
      </div>
   </section>
</template>

<style lang="scss" scoped>
   
</style>