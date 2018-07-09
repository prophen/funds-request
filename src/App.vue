<template>
  
  <div id="app">
    <navigation></navigation>
    <b-container>
      <carousel></carousel>
      <card></card>
    </b-container>
  </div>
  
</template>

<script>
import Navigation from './components/Navigation.vue'
import Carousel from './components/Carousel.vue'
import Card from './components/Card.vue'
export default {
  components: {
    Navigation,
    Carousel,
    Card
  },
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

#carousel1 {
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
