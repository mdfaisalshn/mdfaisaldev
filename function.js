const myself = {
    firstName : "Mohammed",
    lastName : "Faisal",
    myPost : "Web" + " " + "Designer"
}

document.getElementById("myname").innerHTML = myself.firstName + " " + myself.lastName;
document.getElementById("mypost").innerHTML = myself.myPost;