const inputListiner = document.querySelector("form")
inputListiner.addEventListener("input", event => {
    let emailValue = inputListiner.email.value
    let messageValue = inputListiner.message.value
    let emailSave = localStorage.setItem("Email", emailValue)
    let messageSave = localStorage.setItem("Message", messageValue)
    console.log(emailSave)
    document.addEventListener("DOMContentLoaded", (e) => {
        inputListiner.email.value = emailSave
        inputListiner.message.value = messageSave
});
})

