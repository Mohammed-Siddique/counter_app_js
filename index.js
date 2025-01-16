// document.getElementById("count-el")

let countEl = document.getElementById("count-el")

let count = 0
function increment() {
    count+=1
    countEl.innerHTML = count
}

function save() {
    console.log(count)
}

 