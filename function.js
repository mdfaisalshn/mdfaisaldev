const myself = {
    firstName : "Mohammed",
    midName : "Faisal",
    lastName : "Shahna",
    myPost : "Web" + " " + "Designer"
}

document.getElementById("myname").innerHTML = myself.firstName + " " + myself.midName + " " + myself.lastName;
document.getElementById("mypost").innerHTML = myself.myPost;

const pid = getElementById("projects");
const navclass = getElementByClassName("nav");


// window.addEventListener('scroll', function() {
//     let nav = document.querySelector(navclass);
//     if(window.pageYOffset > 0){
//         nav.classList.add('navsc');
//     }
//     else{
//         nav.classList.remove('navsc');
//     }
// })