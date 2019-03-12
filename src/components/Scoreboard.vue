<template lang="pug">
  h2 I'm a scoreboard
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

// fetch('https://sheetsu.com/apis/v1.0bu/1f7490f595d1')
// .then(function(res) {
//   return res.json();
// })
// .then(function(json) {
//   console.log(json);
// });
</script>

<style lang="stylus" scoped>
h2
  font-family: sans-serif;
</style>
