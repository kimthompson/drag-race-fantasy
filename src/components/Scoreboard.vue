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
