gsap.from('h1', {
    y: 100,
    stagger: 0.4,
    overflow: 'hidden',
    dilay: 0.5,
    duration: .5,
});
var h5timer=document.querySelector('#line1-part1 h5');
var grow= 0;
setInterval(function() {
    if(grow<100){
      h5timer.innerHTML= grow++
    }else{
        h5timer.innerHTML= grow
    }
  
   
}, 30); // keep alive
   
var tl = gsap.timeline(); // corrected 'timeliner' to 'timeline'
tl.to('#loder', {
    opacity: 0,
    duration: 1,
    delay: 3,
});