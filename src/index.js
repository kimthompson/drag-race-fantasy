import Scoreboard from './components/Scoreboard.vue'

new Vue({ 
  el: '#app',
  components: {
    'scoreboard': Scoreboard
  },
  data: {
    message: 'Hello Vue!'
  }
});

fetch('https://sheetsu.com/apis/v1.0bu/1f7490f595d1')
.then(function(res) {
  return res.json();
})
.then(function(json) {
  console.log(json);
});