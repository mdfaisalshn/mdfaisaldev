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

function firsPageAnim(){
    var tl=gsap.timeline();

    tl.from("#myname",{
        y: -20,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    // .to("#myname",{
    //     y: 0,
    //     ease: Expo.easeInOut,
    //     duration: 2,
    //     delay: -1,
    //     stagger: .2
    // })
    // .from("#subheading",{
    //     y:'-10',
    //     opacity: 0,
    //     ease: Expo.easeInOut,
    //     duration:1.5,
    //     delay: -1
        
    // })
    
}

firsPageAnim();