<template lang="pug">
  .herstory
    h2 Herstory
    .episodes
      .episode(v-for='episode in data')
        h3 Episode {{ episode[0]['Episode']}}
        table
          tr
            th Queen
            th Tag
            th Points
          tr(v-for='event in episode')
            td.queen {{ event['Queen'] }}
            td.tag {{ event['Tag'] }}
            td.points.eventPoints {{ event['Points'] }}
</template>

<script>
import log from "../data/log.json";

let episodes = [];
let currentEp = 0;
log.forEach(e => {
  if (currentEp < e.Episode) {
    episodes.push(e.Episode);
    currentEp = e.Episode;
  }
});

let data = [];
episodes.forEach(e => {
  let subArray = log.filter(item => item.Episode == e);
  data.push(subArray);
});

export default {
  data() {
    return {
      data: data
    };
  }
};
</script>

