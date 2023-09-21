const myself = {
    firstName : "Mohammed",
    midName : "Faisal",
    lastName : "Shahna",
    myPost : "Web" + " " + "Designer"
}

document.getElementById("myname").innerHTML = myself.firstName + " " + myself.midName + " " + myself.lastName;
document.getElementById("mypost").innerHTML = myself.myPost;