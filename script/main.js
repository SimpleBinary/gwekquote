function getDate() {
    let time = new Date();
    time.setUTCHours(0, 0, 0, 0);

    return time.valueOf();
}

function generateQuote() {
    let seed = getDate();

    let index = Math.sin(seed++) * 10000;
    index -= Math.floor(index);
    index = Math.floor(index * quotes.length);

    return quotes[index];
}

function saveQuote(quote) {
    if (!localStorage.hasOwnProperty("gwekquotes")) {
        localStorage.setItem("gwekquotes", JSON.stringify([]));
    }

    let myQuotes = JSON.parse(localStorage.getItem("gwekquotes"));

    if (!myQuotes.includes(quote)) {
        myQuotes.push(quote);
    }

    localStorage.setItem("gwekquotes", JSON.stringify(myQuotes));
}

document.getElementsByClassName("quote")[0].textContent = generateQuote();
saveQuote(generateQuote());