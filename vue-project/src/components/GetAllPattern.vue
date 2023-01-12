<script >
export default {
  name: 'GetAllPattern',
  components: {
  },
  data() {
    return {
      listePattern: [],
    }
  },
  methods: {
    getAllPattern() {
      let keys = Object.keys(localStorage);
      let i = keys.length;
      while (i--) {
        this.listePattern.push(JSON.parse(localStorage.getItem(keys[i])));
      }
    },
    redirection(param) {
      this.$router.push({ path: param }).then(() => {
        window.location.reload()
      })

    }
  },
  mounted() {
    this.getAllPattern();
  }
}
</script>

<template>
  <main>
    <div id="patterns" class="border-B-2-S d-flex" v-for="element in listePattern">
      <p>{{ element.titre }}</p>
      <button @click="redirection(element.titre)">Voir</button>
    </div>
  </main>
</template>
<style scoped>
#patterns {
  justify-content: space-around;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
