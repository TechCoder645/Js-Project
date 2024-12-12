function loadingAnimatin() {
  var tl = gsap.timeline(); // corrected 'timeliner' to 'timeline'

  // Animate 'h1' element
  tl.from("h1", {
    y: 100,
    stagger: 0.4,
    overflow: "hidden",
    delay: 0.5, // corrected typo from 'dilay' to 'delay'
    duration: 0.5,
  });

  // Animate '#line1-part1' and '.line h2' elements
  tl.from(
    "#line1-part1",
    {
      opacity: 0,
      duration: 1,
      onStart: function () {
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function () {
          if (grow < 100) {
            h5timer.innerHTML = grow++;
          } else {
            h5timer.innerHTML = grow;
          }
        }, 18); // keep alive
      },
    },
    "-=0.5"
  ); // start 0.5 seconds before the previous animation ends
  tl.to(
    ".line h2",
    {
      animationName: "anime",
      opacity: 1,
      duration: 1,
    },
    "-=0.5"
  );
  // Animate '#loder' element
  tl.to("#loder", {
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
  });

  // Animate '#page1' element relative to the end of the previous animation
  tl.from(
    "#page1",
    {
      y: 1200,
      opacity: 0,
      duration: 1.5,
      ease: Power4.easeOut,
    },
    "-=1.5"
  ); // start 1.5 seconds before the previous animation ends

  // Hide '#loder' element relative to the end of the previous animation
  tl.to(
    "#loder",
    {
      display: "none",
      duration: 0,
    },
    "-=1.5"
  ); // start 1.5 seconds before the previous animation ends
  tl.from(
    "#nav ",
    {
      opacity: 0,
      duration: 1.5,
    },
    "-=1"
  ); // start 1.5 seconds before the previous animation ends

  tl.from(".hero h2",{
  y:100,
  stagger:0.4,
  })
}

function cursorAnimatin() {
  document.addEventListener("mouseover", function (dets) {
    gsap.to("#crsr", {
      left: dets.pageX,
      top: dets.pageY,
    });
  });
  Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
    //Parameters are optional.
  });
}
loadingAnimatin();
cursorAnimatin();

