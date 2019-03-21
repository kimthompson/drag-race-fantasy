<template lang="pug">
  table.scoreboard
    tr
      th Username
      th(colspan="3" class="teams") Teams
      th Scores
    tr(v-for='score in scores')
      td.username {{ score['Username'] }}
      td.queen
        figure.mugshot
          img(:src="score['firstImage']", :class="['headshot', score['First Queen'] === score['The Bitch'] ? 'bitch' : '']")
          figcaption {{ score['First Queen'] }}
      td.queen
        figure.mugshot
            img(:src="score['secondImage']", :class="['headshot', score['Second Queen'] === score['The Bitch'] ? 'bitch' : '']")
            figcaption {{ score['Second Queen'] }}
      td.queen
        figure.mugshot
          img(:src="score['thirdImage']", :class="['headshot', score['Third Queen'] === score['The Bitch'] ? 'bitch' : '']")
          figcaption {{ score['Third Queen'] }}
      td.points {{ score['Total'] }}
</template>

<script>
import scores from "../data/leaderboard.json";

import akeria from '../assets/akeria.webp';
import ariel from '../assets/ariel.webp';
import brooke from '../assets/brooke.webp';
import honey from '../assets/honey.webp';
import kahanna from '../assets/kahanna.webp';
import mercedes from '../assets/mercedes.webp';
import nina from '../assets/nina.webp';
import plastique from '../assets/plastique.webp';
import rajah from '../assets/rajah.webp';
import scarlet from '../assets/scarlet.webp';
import shuga from '../assets/shuga.webp';
import silky from '../assets/silky.webp';
import soju from '../assets/soju.webp';
import vanessa from '../assets/vanessa.webp';
import yvie from '../assets/yvie.webp';

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
})

console.log(scores[0].firstImage)

export default {
  data() {
    return {
      scores: scores
    };
  }
};
</script>
