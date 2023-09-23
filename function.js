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