<script>
import GetAllPattern from './components/GetAllPattern/GetAllPattern.vue';

export default{
  name: 'App',
  components:{
    GetAllPattern
  },
  data() {
    return {
      
    }
  },
  methods:{
    accueil(){
      this.$router.push("/")
    }
  }
}
</script>

<template>
  <header>
  </header>

  <main>
    <div id="app" class="d-flex center main">
      <div id="getAll" class="bc-white">
        <button @click="accueil">Accueil</button>
        <h2 class="border-B-2-S">Mes Patterns</h2> 
        <GetAllPattern class="bc-white"/>
      </div>
      <RouterView class="bc-white"/>
    </div>
  </main>
</template>
<style>
.d-flex{
  display: flex;
}
#router{
  width : 70%
}
#getAll{
  width : 30%;
}

.center{
  text-align: center;
}
.main{
  width : 90%;
  margin-left: 5%;
  margin-right: 5%;
}
main{
  width : 100%;
}
.border-B-2-S{
  border: black 1px solid;
}
</style>




