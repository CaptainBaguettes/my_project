<script>
export default {
    name: 'GetPattern',
    props :{
        parametre:{type : String},
    },
    data() {
        return {
           pattern :{
            titre : "",
            elements : [],
           }
        }
    },
    methods: {
        getPattern(){
            var urlcourante = document.location.pathname;
            let pathname = urlcourante.split("/");
            let element = JSON.parse(localStorage.getItem(pathname[1]));
            this.pattern.titre = element.titre;
            this.pattern.elements = element.elements;
        }
        

    },
    mounted() {
        this.getPattern();
    }
}
</script>

<template>
    <div id="pattern" class="border-B-2-S">
        <h1>{{this.pattern.titre}}</h1>
        <div v-for="element in pattern.elements">
            <p>{{ element }}</p>
        </div>
    </div>
</template>

<style scoped>
#pattern{
width: 100%;
}
</style>