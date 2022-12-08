<script setup>
new Vue({
  el: '',
  methods: {
    concatenation(name){
      return "Hello" + name;
    }
  }
})
</script>

<template>
  <main>
    <div>
      <input type="text" id="name"/>
      <h1>test </h1>
      <button @click="concatenation(name.value)">Dire bonjour</button>
    </div>
  </main>
</template>
