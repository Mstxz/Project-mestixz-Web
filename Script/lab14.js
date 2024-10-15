
function setName(event) {
    event.preventDefault();
    const username = document.getElementById('username');
    const userinput = document.getElementById('name');
    username.textContent =  "Welcome, " + userinput.value;
    console.log("changed name");
}

function setImage(event){
    event.preventDefault();
    const profileimage = document.getElementById('signin-emblem');
    const profileimageinput = document.getElementById('profileimageinput');
    profileimage.style.backgroundImage = `url(${profileimageinput.value})`;
    console.log("changed image");
}
