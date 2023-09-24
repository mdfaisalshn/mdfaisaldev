$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

let mypost = document.querySelector('#mypost');
let post = "Designer";
let flag = 0;

let index = 0;

const typeWriter = () => {
    let new_post = post.slice(0,index);
    new_post += "_";
    mypost.innerText = new_post;
    
    if (flag===0) {
        index++;
    }
    else if (flag===1) {
        index--;
    }
    if(index > post.length) {
        flag = 1;
    }
    if (index === 0 && post==="Designer") {
        flag = 0;
        post = "Developer";
    }
    else if (index === 0 && post==="Developer") {
        flag = 0;
        post = "Designer";
    }

    setTimeout(() => typeWriter(), 150);
}


typeWriter();


let proj = document.querySelector('.sec-6');

function animation(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
    .from("#hello",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1,
        delay: -1,
        stagger: .2
    })
    .from("#myname",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.3,
        delay: 0,
        stagger: .2
    })
    .from("#web-p",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.3,
        delay: 0,
        stagger: .2
    })
    .from("#resume-btn",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.5,
        delay: 0,
        stagger: .2
    })
}

animation();

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sec-6',
        start: '15% 80%',
        end: '35% 15%',
        toggleAction: "restart reverse",
        scrub: false,
        markers: false
    }
})

tl1.from('#proj-head', {
    x: -10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl1.from('.card-1', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl1.from('.card-2', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl1.from('.card-3', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl1.from('.card-4', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl1.from('.card-5', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl1.from('.card-6', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sec-2',
        start: '10% 80%',
        end: '35% 20%',
        scrub: false,
        markers: false
    }
})

tl2.from('#resume-head', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl2.from('.education', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl2.from('.skills', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl2.from('.front-end', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl2.from('.prog-langs', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl2.from('.back-end', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl2.from('.speak-langs', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sec-3',
        start: '15% 80%',
        end: '35% 20%',
        scrub: false,
        markers: false
    }
})

tl3.from('#cont-head', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl3.from('.inp-1', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl3.from('.inp-2', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl3.from('.inp-3', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl3.from('#feed-mssg', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl3.from('#mssg-span', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})
tl3.from('.inp-4', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl3.from('#form-btn', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sec-5',
        start: '20% 80%',
        end: '35% 20%',
        scrub: false,
        markers: false
    }
})

tl5.from('#abt-head', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl5.from('.img', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl5.from('.about p', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl5.from('.cb-1', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl5.from('.cb-2', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl5.from('.cb-3', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl5.from('.cb-4', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})