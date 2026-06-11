const inputListiner = document.querySelector("form.feedback-form")
inputListiner.addEventListener("input", event => {
    const DataOfForm = new FormData(inputListiner)
    const data = {
        email: DataOfForm.get("email"),
        message: DataOfForm.get("message"),
    }
        saveToLS("userData", data)
   
})

document.addEventListener("DOMContentLoaded", (e) => {
    const data = loadFromLS("userData")
    if (data) {
        inputListiner.elements.email.value = data.email
        inputListiner.elements.message.value = data.message
    }
    });

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
    const DataOfForm = new FormData(inputListiner)
    const data = {
        email: DataOfForm.get("email"),
        message: DataOfForm.get("message"),
    }
    
    event.preventDefault()
    if (inputListiner.elements.email.value.trim().length === 0 || inputListiner.elements.message.value.trim().length === 0) {
        return alert("fill in email and message")
    }
    inputListiner.reset()
    console.log(data)
    localStorage.removeItem("userData")
})