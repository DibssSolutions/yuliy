import { TimelineMax, TweenMax } from 'gsap/all';
import Splitting from 'splitting';
import sal from 'sal.js';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
import imagesLoaded from 'imagesLoaded';

var imgLoad = imagesLoaded(document.body, { background: true }, function(
  instance
) {
  document.body.classList.add('body-loaded');
  setTimeout(() => heroAnimation(), 400);
});

Splitting();
sal({
  threshold: 0.2
});

let tl = new TimelineMax();

// const heroTitle = document.querySelectorAll(
//   '.hero__title [data-animation="from-bottom"]'
// );

const heroTitle = document.querySelectorAll('.hero__title [data-char]');
const heroText = document.querySelectorAll(
  '.hero__descr [data-animation="from-left"]'
);

tl.set(heroTitle, { x: 100 });

function heroAnimation() {
  tl.staggerTo(
    heroTitle,
    2,
    {
      opacity: 1,
      x: 0,
      ease: Power3.easeInOut
    },
    0.1
  ).staggerTo(
    heroText,
    1,
    {
      opacity: 1,
      x: 0
    },
    0.3,
    '-=1.5'
  );
}

// var timeline = new TimelineMax();
// var tween1 = TweenMax.from('.process__block:nth-child(1)', 1, { x: 100 });
// var tween2 = TweenMax.to('.process__block:nth-child(2)', 1, { y: 100 });
// timeline.add(tween1).add(tween2);

function process() {
  var lines = [...document.querySelectorAll('.path1')];
  var arrows = [...document.querySelectorAll('.path2')];
  var line = lines[0].getTotalLength();
  var arrow = arrows[0].getTotalLength();

  TweenMax.set(lines, { strokeDasharray: line });
  TweenMax.set(arrows, { strokeDasharray: arrow });
  TweenMax.fromTo(
    lines,
    3,
    { strokeDashoffset: line },
    { strokeDashoffset: 0,
      onComplete: () => console.log('completed') }
  );
  TweenMax.fromTo(
    arrows,
    3,
    { strokeDashoffset: arrow },
    { strokeDashoffset: 0 }
  );
  var tlProcess = new TimelineMax();
  tlProcess
    .set(document.querySelectorAll('.process__block'), { utoAlpha: 0 })
    .staggerFromTo(
      '.process__block',
      2,
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0 },
      0.5
    );
}

var scrollProcessController = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '.process'
})
  // .addIndicators()
  .addTo(scrollProcessController)
  .on('enter', () => {
    process();
  });
// scene.setTween(TweenMax.to('.process__block'), 1, { x: 100 });
