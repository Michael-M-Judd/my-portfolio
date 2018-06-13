
// Main animation timeline
var hello = new TimelineLite({onComplete: wavy});
hello.add ( TweenLite.from('.hi', 1, {opacity: 0, top: '250', ease: Back.easeOut.config(1.7)}))
hello.add ( TweenLite.from('.michael', 0.8, {opacity: 0, top: '250', ease: Back.easeOut.config(1)}))
hello.add ( TweenLite.from( '#tagline', 1, {opacity: 0, top: '100', ease: Power4.easeOut}), '+=0.5')
hello.add ( TweenLite.from( '#tagline-2', 1, {opacity: 0, left: '-100', ease: Power4.easeOut}))
hello.add ( TweenLite.to('.wave', 0.2, {opacity: 1}), '-=1');
hello.add ( TweenLite.from('#latest-work', 1, {opacity: 0, bottom: '-500'}))
hello.play()

function wavy() {
    TweenMax.staggerTo('.wave', .5, {
        boxShadow:  'inset 0px 0px 20px -6px rgba(0,0,0,0.3);',
        borderColor: 'white',
        transform: 'scale(1.26)'}, 0.2);
}


TweenMax.staggerFrom('.tech-container img', 1, {opacity: 0, left: '50'}, 0.2);