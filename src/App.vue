<template>
  <div id="app">
    {{count}}
    {{getCount}}
    <button @click="increment(6)">增加</button>
    <button @click="myIncrement(10)">增加</button>
  </div>
</template>

<script>
import Hello from './components/Hello'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

export default {
  name: 'app',
  methods:{
    ...mapActions({'myIncrement':'increment'}),
    ...mapMutations(['increment'])
  },
  components: {
    Hello
  },
  computed:{
    ...mapGetters({getCount:'count'}),
    ...mapState(['count'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
