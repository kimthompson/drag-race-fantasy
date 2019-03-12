<template lang="pug">
  table
    tr
      th Username
      th Scores
    tr(v-for='score in scores')
      td.username {{ score['Username (Gamertag)'] }}
      td.score {{ score['Total'] }}
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      scores: null
    }
  },
  mounted() {
    this.getScores()
  },
  methods: {
    getScores() {
      axios
      .get('https://sheetsu.com/apis/v1.0bu/1f7490f595d1')
      .then(res => {
        this.scores = res.data
        console.log(this.scores)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
table
  text-align left
  margin 2em
  padding 1em

td
  margin 1em

th
  font-size 1.8em

.username
  width 15em
  font-size 1.2em

.score
  text-align right
  font-size 1.2em
  font-weight bold
</style>
