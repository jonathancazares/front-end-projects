let count = 0;
let counter = document.getElementById("counter");
let history = document.getElementById("previous-count")

function increment() {
    count += 1;
    counter.textContent = count;
}

function decrement() {
    if (count > 0) {
        count -= 1;
        counter.textContent = count;
    }
}

function restart() {
    if (count > 0) {
        history.textContent = "Previous count: " + count;
        count = 0;
        counter.textContent = count;
    }
}