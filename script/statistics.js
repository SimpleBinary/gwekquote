if (!localStorage.hasOwnProperty("gwekquotes")) {
    localStorage.setItem("gwekquotes", JSON.stringify([]));
}

let number = localStorage.getItem("gwekquotes").length;
let total = quotes.length;

document.getElementsByClassName("percentage")[0].textContent = `${number / total * 100}%`;