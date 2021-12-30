<template>
  <div class="word-input">
    <!-- <input v-model.trim="word"> -->
    <LetterInput @add-letter="addLetter"/>
    <p>{{ word }}</p>
    <button @click="deleteLetter">Delete</button>
    <button @click="$emit('add', word)">Add</button>
  </div>
</template>

<script>
import LetterInput from './LetterInput.vue'

export default {
  name: 'WordInput',
  components: {
    LetterInput
  },
  props: {
    words: Number
  },
  data() {
    return {
      word: ''
    }
  },
  methods: {
    addLetter(letter) {
      this.word = `${this.word}${letter}`
    },
    deleteLetter() {
      this.word = this.word.slice(0, -1)
    }
  },
  watch: {
    words(value, oldValue) {
      return this.word = value !== oldValue ? '' : this.word
    }
  }
}
</script>

<style scoped>
p:empty::before {
  content:"\200B";
}
</style>
