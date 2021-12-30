<template>
  <div id="app">
    <WordInput @add="add" :words="words.length"/>
    <WordsList :words="words"/>
  </div>
</template>

<script>
import WordInput from './components/WordInput.vue'
import WordsList from './components/WordsList.vue'

export default {
  name: 'App',
  components: {
    WordInput,
    WordsList
  },
  data() {
    return {
      added: false,
      words: []
    }
  },
  methods: {
    add(word) {
      word = word.toLowerCase()
      if (word.length > 0 && this.words.indexOf(word) == -1) {
        this.words.push(word)
        this.words = this.words.sort()
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
