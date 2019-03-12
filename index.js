fetch('https://sheetsu.com/apis/v1.0bu/1f7490f595d1')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json);
  let data = json
});