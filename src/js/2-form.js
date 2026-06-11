const inputListiner = document.querySelector("form.feedback-form")
let formData = { email: "", message: "" }

document.addEventListener("DOMContentLoaded", (e) => {
    
    const data = loadFromLS("userData")
    if (data) {
        inputListiner.elements.email.value = data.email
        inputListiner.elements.message.value = data.message
         formData = data
    }
});
    
inputListiner.addEventListener("input", event => {
     formData = {email: `${inputListiner.elements.email.value}`, message: `${inputListiner.elements.message.value}`}
    saveToLS("userData", formData)
    console.log(formData)
   
})

 function saveToLS(key, value) {
        const json = JSON.stringify(value)
        localStorage.setItem(key, json)
    }
    function loadFromLS(key) {
        const json = localStorage.getItem(key)
        try {
            return JSON.parse(json)
        } catch {
            return json
        }
}
    


inputListiner.addEventListener("submit", event => {

    event.preventDefault()
    if (inputListiner.elements.email.value.trim().length === 0 || inputListiner.elements.message.value.trim().length === 0) {
        return alert("fill in email and message")
    }
    console.log(formData)
    inputListiner.reset()
    localStorage.removeItem("userData")

    formData = {email: "", message: ""}
})