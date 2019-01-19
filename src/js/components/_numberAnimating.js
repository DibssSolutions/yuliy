let tl = new TimelineMax();
let game =  { score: 1 };
tl.to(game, 2, {
  score:"+=200",
  roundProps:"score", 
  onUpdate: updateHandler, 
  ease:Linear.easeNone
});

function updateHandler() {
  document.querySelector('.number').innerHTML = game.score;
}