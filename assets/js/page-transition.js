// Animation (Don't touch)
function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		 setTimeout(() => {
			  done();
		 }, n);
	});
}


// Animation - Loading page First Time
function loadAnimation() {
	var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		autoAlpha: 1
	});

   tl.set(".loading-fade", { 
		yPercent: 102,
	});

   tl.to(".loading-screen .ani-line-1", { 
      duration: .2,
		ease: "Power1.easeOut",
      y: "-33%", 
      delay: 1
	});

   tl.to(".loading-screen .ani-line-2", { 
      duration: .25,
		ease: "Power1.easeOut",
      x: "-176%", 
      y: "-40%", 
	},"-=.1");

   tl.to(".loading-screen .ani-line-3", { 
      duration: .3,
		ease: "Power1.easeOut",
      x: "-7%", 
      y: "-54%", 
	},"-=.1");

   tl.to(".loading-screen .ani-line-4", { 
      duration: .25,
		ease: "Power1.easeOut",
      y: "-50%", 
	},"-=.05");

	tl.to(".loading-small-block", { 
      duration: 1.5,
		ease: "Power3.easeInOut",
      scale: 6,
      delay: ".5"
	});

	tl.to(".loading-screen .ani-line", { 
      duration: .5,
		ease: "linear",
      backgroundColor: "#000",
	},"-=1.25");

	tl.to(".loading-screen .svg-pulse-paths path", { 
      duration: .5,
		ease: "linear",
      opacity: 1,
		stagger: -.07,
	},"-=1.6");

	tl.to(".loading-screen .svg-pulse-paths path", { 
      duration: .6,
		ease: "linear",
      stroke: "#000",
		stagger: -.05,
	},"-=.9");

   tl.to(".loading-screen", { 
      duration: 1,
		ease: "linear",
      autoAlpha: 0
	},"-=1");

   tl.from(".default-header .og .letter", { 
      duration: .5,
      yPercent: 100,
      ease: "Power3.easeOut",
      skewX: -10,
      stagger: 0.025,
      clearProps: true,
	},"-=.5");

   tl.from(".extra-fade", { 
		duration: .75,
		ease: "Power3.easeOut",
		opacity: 0,
      delay: 0,
      y: 50,
      stagger: .1
	},"-=.5");

}

function pageTransition() {
	var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		autoAlpha: 0
	});

   tl.set(".loading-fade", { 
		yPercent: 102,
	});

   tl.to(".loading-fade", { 
		duration: .5,
		ease: "Power3.easeIn",
		yPercent: "0"
	});

   tl.set(".loading-screen", { 
		autoAlpha: 0
	});

}


function contentAnimation() {
	var tl = gsap.timeline();

   tl.set(".loading-screen", { 
		yPercent: 0
	});

   tl.set(".default-header .og .letter", { 
      yPercent: 100,
      skewX: -10,
   });

   tl.to(".loading-fade", { 
		duration: .75,
		ease: "Power3.easeOut",
		yPercent: -102,
      delay: .25,
      onStart: letterAnimation
	});

   tl.from(".extra-fade", { 
		duration: .75,
		ease: "Power3.easeOut",
		opacity: 0,
      delay: 0,
      y: 50,
      stagger: .1
	},"-=.5");

}

function letterAnimation() {

   gsap.to(".default-header .og .letter", { 
      duration: .5,
      yPercent: 0,
      ease: "Power3.easeOut",
      skewX: 0,
      stagger: 0.025,
      delay: .25
   });

}


if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }

// Call animation 
$(function () {
	barba.init({

      sync: true,

		transitions: [
			{
				async leave(data) {
					const done = this.async();

					pageTransition();
					await delay(500);
					$(window).scrollTop(0);
					done();
				}, 
            async enter(data) {
					contentAnimation();
				},
            async once(data) {
					loadAnimation();
				},
			},
		],
	});
});
