<template lang="pug">
  table.scoreboard
    tr
      th Username
      th(colspan="3" class="teams") Teams
      th The Bitch
      th Scores
    tr(v-for='score in scores')
      td.username {{ score['Username (Gamertag)'] }}
      td.queen {{ score['First Queen'] }}
      td.queen {{ score['Second Queen'] }}
      td.queen {{ score['Third Queen'] }}
      td.queen {{ score['The Bitch'] }}
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
