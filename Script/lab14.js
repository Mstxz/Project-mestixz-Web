
function setName(event) {
    event.preventDefault();
    const username = document.getElementById('username');
    const userinput = document.getElementById('name');
    username.textContent =  userinput.value;
    console.log("changed name");
}

function setImage(event){
    event.preventDefault();
    const profileimage = document.getElementById('signin-emblem');
    const profileimageinput = document.getElementById('profileimageinput');
    profileimage.style.backgroundImage = `url(${profileimageinput.value})`;
    console.log("changed image");
}

function gettingPhonenumber(event){
    event.preventDefault();
    
}

//export to CSV
function saveCSV() {
    const csvContent = phonenumber.map(row => row.join(",")).join("\n"); // Convert array to CSV string
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "data.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
}
