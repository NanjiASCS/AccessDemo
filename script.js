var submitButton = document.getElementById("submitButton");
var userName = document.getElementById("username");
var passWord = document.getElementById("password");
var message = document.createElement("h1");
message.style.color = "blue";
message.style.fontSize = "50px";
message.style.border = "10px";
message.style.backgroundColor= "black";
var body = document.querySelector('body');
var loot = "Click here for FREE LOOT";
var lootLink =loot.link("https://www.youtube.com/watch?v=Gu6z6tuNePc")
var failureImage = document.createElement("img");
failureImage.src= "https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2018/06/15130245/Failure-learning-mistakes-700x467.jpg"
console.dir(userName);
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    // User and pass
    if (userName.value == "Nanji" && passWord.value == "Nanji") {
        alert("Login sucessful, you won an EDGE TRANSIT");
        failureImage.src="https://graphlix.files.wordpress.com/2018/10/edgetransitexotic.jpg?w=1200"
        body.appendChild(failureImage);
        message.innerHTML = lootLink;
        body.appendChild(message);
        //User and no password
    } else if (userName.value == "Nanji" && passWord.value != "Nanji"){
        alert("Username works, but the Password was WEAK.");
        message.innerHTML = "Try harder to remember. It's probably written down somewhere.";
        body.appendChild(message);
        failureImage.src= "https://bungie.net/common/destiny2_content/icons/07a1ecf8414073a62cdb1ec7aea2ca1d.jpg"
        body.appendChild(failureImage);

    //Password and no user
    } else if (userName.value != "Nanji" && passWord.value == "Nanji"){
        alert("Password was accepted, you're half right.");
        message.innerHTML = "How do you know your password but not username???";
        body.appendChild(message);
        failureImage.src="https://thumbs.gfycat.com/VainCelebratedDouglasfirbarkbeetle-size_restricted.gif";
        body.appendChild(failureImage);
        //No user or pass
    }else{
        alert("FAILURE!!!");
         
        body.appendChild(failureImage);
    }
    
   // alert("Username: " + userName.value + " Password: " + passWord.value);
});

//https://www.youtube.com/watch?v=Gu6z6tuNePc
//https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2018/06/15130245/Failure-learning-mistakes-700x467.jpg