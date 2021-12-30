<template>
  <div class="letter-input">
    <span v-for="letter in letters" :key="letter" @click="$emit('add-letter', letter)">{{ letter }}</span>
  </div>
</template>

<script>
import { shuffle } from '../helpers/shuffle.js'

// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
const vocals = ['A', 'E', 'I', 'O', 'U']
const letters = shuffle(shuffle(consonants).slice(0,4).concat(shuffle(vocals).slice(0,3)))

export default {
  name: 'LetterInput',
  data() {
    return {
      letters: letters
    }
  }
}
</script>

<style scoped>
  span {
    padding: 10px;
    margin: 0px 5px;
    background-color: lightgray;
    border: 2px sold darkgray;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    color: white;
  }
</style>