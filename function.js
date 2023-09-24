const scroll = new LocomotiveScroll({
    el: document.querySelector('#home'),
    smooth: true
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
        duration: 0.3,
        ease: Expo.easeInOut
    })
    .from("#hello",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.5,
        delay: 0,
        stagger: .2
    })
    .from("#myname",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.5,
        delay: 0,
        stagger: .2
    })
    .from("#web-p",{
        y: '50',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.5,
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

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.sec-6',
//         start: '0% center',
//         end: '10% center',
//         scrub: true,
//         markers: false
//     }
// })

// tl.from('.sec-6', {
//     x: -10,
//     opacity: 0,
//     ease: Expo.easeInOut
// })