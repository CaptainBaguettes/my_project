<script >
export default {
  name: 'GetAllPattern',
  components: {
  },
  data() {
    return {
      listePattern: [],
      values : []
    }
  },
  methods: {
    getAllPatterns() {
      this.values = Object.values(localStorage);

      this.listePattern = this.values.map(x => JSON.parse(x));
    },
    redirection(param) {
      this.$router.push({ path: param }).then(() => {
        window.location.reload()
      })

    }
  },
  mounted() {
    this.getAllPatterns();
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
