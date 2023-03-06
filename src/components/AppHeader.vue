<script>

export default {
   name: 'AppHeader'
}

</script>




<template lang="">

   <header>
      <nav class="navbar navbar-expand-md bg-body-tertiary">
         <div class="container">
            <a class="navbar-brand" href="#">Vite-Boolfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div class="navbar-nav">
                  <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}"> 
                     Home
                  </router-link> 
                  <router-link class="nav-link active" aria-current="page" :to="{name: 'posts'}"> 
                     Posts
                  </router-link> 
                  <router-link class="nav-link active" aria-current="page" :to="{name: 'about-us'}"> 
                     AboutUs
                  </router-link> 
                  <router-link class="nav-link active" aria-current="page" :to="{name: 'post'}"> 
                     SinglePost
                  </router-link> 
               </div>
            </div>
         </div>
      </nav>
   </header>
</template>

<style lang="">
   
</style>