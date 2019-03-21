<template lang="pug">
  table.scoreboard
    tr
      th Username
      th Scores
    tr(v-for='score in scores')
      td.username {{ score['Username (Gamertag)'] }}
      td.points {{ score['Total'] }}
</template>

<script>
import scores from "../data/leaderboard.json";

export default {
  data() {
    return {
      scores: scores
    };
  }
};
</script>
