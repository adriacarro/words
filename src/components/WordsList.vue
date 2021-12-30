<template>
  <div class="words-list">
    <p v-if="words.length">
      {{ words.length }} {{ wordsPluralized }} added: <strong>{{ wordsSentence }}</strong>
    </p>
    <p v-else>No words yet</p>
  </div>
</template>

<script>

import pluralize from 'pluralize'

export default {
  name: 'WordsList',
  props: {
    words: Array
  },
  computed: {
    wordsSentence() {
      return this.words.join(', ')
    },
    wordsPluralized() {
      return pluralize('word', this.words.length)
    }
  }
}
</script>
