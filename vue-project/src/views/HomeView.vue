<script >
import CreatePattern from '../components/CreatePattern.vue';
export default {
  name: 'HomeView',
  components:{
    CreatePattern,
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<template>
  <main>
    <div class="center" id="AddToDo">
      <h1>Bienvenue sur PatternLister</h1>
      <CreatePattern/>
    </div>
  </main>
</template>
<style>
#AddToDo{
  width : 70%;
}

</style>
