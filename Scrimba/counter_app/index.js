let count = 0;
const counter = document.getElementById("counter");
const history = document.getElementById("previous-count")

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