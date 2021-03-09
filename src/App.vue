<template>
  <div>
    <div class="container">
      <Navbar/>
      <Mapa/>
      <br>
      <Home/>
    </div>
    <!--    <footer class="text-center">&copy;{{ new Date().getFullYear() }} - Tribunal Regional Eleitoral de Goiás</footer>-->
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Home from "@/views/Home";
import Mapa from "@/views/Mapa";

export default {
  name: 'app',
  components: {
    Navbar,
    Home,
    Mapa,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#app {
  //background-color: #f7f8fb;
  color: #5a5c69;
  font-family: "Roboto", sans-serif;
  height: 100vh;
  padding-bottom: 4rem;

}
</style>
