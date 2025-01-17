
let countEl = document.getElementById("count-el")
let saveEl = document.querySelector("#save-el")

// increments the count when clicked increment button
let count = 0
function increment() {
    count+=1
    countEl.textContent = count
}

// saves the incremented values and initializes the count to zero
function save() {
    console.log(count)
    saveEl.textContent += " "+count+" - "
    countEl.textContent = 0 
    count = 0
}







 