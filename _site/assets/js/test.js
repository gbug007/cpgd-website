const Anime = require('/node_modules/animejs/lib/anime.es.js');

var myAnimation = anime({
   targets: ['.blue', '.green'],
   translateX: '13rem',
   rotate: 180,
   borderRadius: 8,
   duration: 2000,
   loop: true
 });

console.log("hello")