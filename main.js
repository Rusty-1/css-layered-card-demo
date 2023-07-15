function sendMessage() {
    const userStatus = document.querySelector("#userStatus");

    if(userStatus.dataset.status == "away") {
        userStatus.dataset.status = "active";
        userStatus.textContent = "Active";
    }else{
        userStatus.dataset.status = "away";
        userStatus.textContent = "Away";
    }
}