<template lang="pug">
  .scoreboard
    .scoreboard_player(v-for='score in scores')
      h3.username {{ score['Username']}}
      h2.points.scoreboardPoints {{ score['Total'] }}
      span.queen
        figure.mugshot
          img(:src="score['firstImage']", :class="['headshot', score['First Queen'] === score['The Bitch'] ? 'bitch' : '']")
          figcaption {{ score['First Queen'] }}
      span.queen
        figure.mugshot
            img(:src="score['secondImage']", :class="['headshot', score['Second Queen'] === score['The Bitch'] ? 'bitch' : '']")
            figcaption {{ score['Second Queen'] }}
      span.queen
        figure.mugshot
          img(:src="score['thirdImage']", :class="['headshot', score['Third Queen'] === score['The Bitch'] ? 'bitch' : '']")
          figcaption {{ score['Third Queen'] }}
</template>

<script>
import scores from "../data/leaderboard.json";

import akeria from '../assets/akeria.png';
import ariel from '../assets/ariel.png';
import brooke from '../assets/brooke.png';
import honey from '../assets/honey.png';
import kahanna from '../assets/kahanna.png';
import mercedes from '../assets/mercedes.png';
import nina from '../assets/nina.png';
import plastique from '../assets/plastique.png';
import rajah from '../assets/rajah.png';
import scarlet from '../assets/scarlet.png';
import shuga from '../assets/shuga.png';
import silky from '../assets/silky.png';
import soju from '../assets/soju.png';
import vanessa from '../assets/vanessa.png';
import yvie from '../assets/yvie.png';

const queens = {
  "akeria": akeria,
  "ariel": ariel,
  "brooke": brooke,
  "honey": honey,
  "kahanna": kahanna,
  "mercedes": mercedes,
  "nina": nina,
  "plastique": plastique,
  "rajah": rajah,
  "scarlet": scarlet,
  "shuga": shuga,
  "silky": silky,
  "soju": soju,
  "vanessa": vanessa,
  "yvie": yvie
}

scores.forEach(score => {
  score.firstImage = queens[score['First Queen'].split(" ")[0].toLowerCase().replace("'", "")];
  score.secondImage = queens[score['Second Queen'].split(" ")[0].toLowerCase().replace("'", "")];
  score.thirdImage = queens[score['Third Queen'].split(" ")[0].toLowerCase().replace("'", "")];
  console.log(score['Total'])
})

scores.sort((a,b) => {
  if (parseInt(a['Total']) > parseInt(b['Total'])) return -1;
  if (parseInt(a['Total']) < parseInt(b['Total'])) return 1;
  return 0;
})

scores.forEach(score => {
  console.log(score['Total'])
})

export default {
  data() {
    return {
      scores: scores
    };
  }
};
</script>
