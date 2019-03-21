<template lang="pug">
  .herstory
    h2 Herstory
    //- TODO: loop per episode
    h3 Episode 1
    table
      tr
        th Tag
        th Winnah
        th Points
      //- TODO: loop per tag
      tr
        td #mini
        td Silky Nutmeg Ganache
        td 3
      tr
        td #winner
        td Brooke Lynn Hytes
        td 7
      tr
        td #bottom
        td Kahanna Montrese
        td -5
      tr
        td #bottom
        td Soju
        td -5
      tr
        td #shantay
        td Kahanna Montrese
        td 2
      tr
        td #sashay
        td Soju
        td -5
</template>

<script>
export default {
  data() {
    return {
      scores: []
    }
  },
  mounted() {
    this.getScores()
  },
  methods: {
    getScores() {
      var self = this
      fetch('https://sheetsu.com/apis/v1.0bu/1f7490f595d1')
      .then(function(res) {
        self.scores = res.json()
        console.log(res.json())
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
h2
  font-family: sans-serif;
</style>
