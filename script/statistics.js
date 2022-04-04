if (!localStorage.hasOwnProperty("gwekquotes")) {
    localStorage.setItem("gwekquotes", JSON.stringify([]));
}

let number = localStorage.getItem("gwekquotes").length;
let total = quotes.length;

console.log(localStorage.getItem("gwekquotes"));
console.log(quotes)
console.log((number / total * 100).toFixed(2))

document.getElementsByClassName("percentage")[0].textContent = `${(number / total * 100).toFixed(2)}%`;
