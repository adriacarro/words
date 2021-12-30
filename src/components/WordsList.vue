<template>
  <div class="words-list">
    <p v-if="words.length">{{ wordsSentence }}</p>
    <p v-else>No words yet</p>
  </div>
</template>

<script>

export default {
  name: 'WordsList',
  props: {
    words: Array
  },
  computed: {
    wordsSentence() {
      return this.words.join(', ')
    }
  }
}
</script>
