// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#home'),
//     smooth: true
// });

let mypost = document.querySelector('#mypost');
let post = "Web Designer";
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
    if (index === 0 && post==="Web Designer") {
        flag = 0;
        post = "Web Developer";
    }
    else if (index === 0 && post==="Web Developer") {
        flag = 0;
        post = "Video Editor";
    }
    else if (index === 0 && post==="Video Editor") {
        flag = 0;
        post = "Web Designer";
    }

    setTimeout(() => typeWriter(), 100);
}


typeWriter();


let proj = document.querySelector('.sec-6');

function animation(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 0.8,
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
        scrub: 1,
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

tl1.from('#proj-view-btn', {
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
        scrub: 1,
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
        scrub: 1,
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
    y: 100,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})

tl3.from('#mssg-span', {
    1: 100,
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
        start: '15% 80%',
        end: '19% 20%',
        scrub: 1,
        markers: false
    }
})

tl5.from('#abt-head', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0.3,
    duration: 0.1
})

tl5.from('.about p', {
    y: 100,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.5
})

tl5.from('.img', {
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
tl5.add(gsap.delayedCall(0,counter1));

tl5.from('.cb-2', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})
tl5.add(gsap.delayedCall(0,counter2));

tl5.from('.cb-3', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})
tl5.add(gsap.delayedCall(0,counter3));

tl5.from('.cb-4', {
    x: -50,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 0.1
})
tl5.add(gsap.delayedCall(-0.1,counter4));


function counter1(){
    let counts1 = setInterval(updated1);
    let upto1 = 0;
    function updated1() {
        let count1 = document.getElementById("counter-1");
        count1.innerHTML = ++upto1;
        if (upto1 === 300) {
            clearInterval(counts1);
        }
    }
}
function counter2(){
    let counts2 = setInterval(updated2);
    let upto2 = 0;
    function updated2() {
        let count2 = document.getElementById("counter-2");
        count2.innerHTML = ++upto2;
        if (upto2 === 300) {
            clearInterval(counts2);
        }
    }
}
function counter3(){
    let counts3 = setInterval(updated3);
    let upto3 = 0;
    function updated3() {
        let count3 = document.getElementById("counter-3");
        count3.innerHTML = ++upto3;
        if (upto3 === 250) {
            clearInterval(counts3);
        }
    }
}
function counter4(){
    let counts4 = setInterval(updated4);
    let upto4 = 0;
    function updated4() {
        let count4 = document.getElementById("counter-4");
        count4.innerHTML = ++upto4;
        if (upto4 === 450) {
            clearInterval(counts4);
        }
    }
}