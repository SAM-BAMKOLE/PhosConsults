// getting the required elements
const form = document.querySelector("#booking-form"),
    statusTxt = document.querySelector("#info");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusTxt.style.display = "block";
    statusTxt.style.color = "black";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/message.php", true);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response;
            if (
                response.indexOf("Please fill the form correctly!") != -1 ||
                response.indexOf("Please enter a valid email!") ||
                response.indexOf("Sorry, failed to send your message!")
            ) {
                statusTxt.style.color = "red";
            } else {
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = "none";
                }, 3000);
            }
            statusTxt.textContent = response;
        }
    };
    let formData = new FormData(form);
    xhr.send(formData);
});
