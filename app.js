const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainCounter = document.getElementById("remaining-counter")
textareaEl.addEventListener("keyup", () => {
    updateCounter()
})
updateCounter()
function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length
    remainCounter.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length
}