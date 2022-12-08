<script>

export default{
  name: 'App',
  data() {
    return {
      name: "",
      clicked:false,
      moviesNameList : []
    }
  },
  methods:{
    concatenation(name){
      if(name == ""){
        throw new Error("test");
      }else{
        return "Hello " + name;
      }
    },

    getElement(){
      fetch('https://swapi.py4e.com/api/people/1/')
      .then(response => {
        return response.json();
      }).then(movie => {
        console.log(movie)
        let movies = movie.films;
        for(let i = 0; i < movies.length;i++){
          fetch(`${movies[i]}`)
          .then(response => {
            return response.json();
          }).then(moviesName => {
            console.log(moviesName.title)
            this.moviesNameList.push(moviesName.title);
          })
        };
        console.log(this.moviesNameList);
      })
    },
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
    </div>
  </header>

  <main>
    <div id="app">
      <input type="text" v-model="name" placeholder="Rentrez votre nom"/>
      <button @click="(clicked=true)">Dire bonjour</button>
      <p v-if="clicked">{{concatenation(name)}}</p>
      <p v-for="name in moviesNameList">{{name}}</p>

      <button @click="getElement()">Click</button>
    </div>
  </main>
</template>




