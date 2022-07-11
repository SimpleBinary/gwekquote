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

function generateStats(quote) {
    if (!localStorage.hasOwnProperty("gwekquotes")) {
        localStorage.setItem("gwekquotes", JSON.stringify([]));
    }

    if (!localStorage.hasOwnProperty("gwekquotes-dates")) {
        localStorage.setItem("gwekquotes-dates", JSON.stringify([]));
    }

    if (!localStorage.hasOwnProperty("gwekquotes-opened")) {
        localStorage.setItem("gwekquotes-opened", "0");
    }

    if (!localStorage.hasOwnProperty("gwekquotes-theme")) {
        localStorage.setItem("gwekquotes-theme", "system");
    }

    let myQuotes = JSON.parse(localStorage.getItem("gwekquotes"));
    let dates = JSON.parse(localStorage.getItem("gwekquotes-dates"));
    let opened = parseInt(localStorage.getItem("gwekquotes-opened")) + 1;

    if (!myQuotes.includes(quote)) {
        myQuotes.push(quote);
    }

    if (!dates.includes(getDate())) {
        dates.push(getDate());
    }

    localStorage.setItem("gwekquotes", JSON.stringify(myQuotes));
    localStorage.setItem("gwekquotes-dates", JSON.stringify(dates));
    localStorage.setItem("gwekquotes-opened", opened.toString());
}

document.getElementsByClassName("quote")[0].textContent = generateQuote();
generateStats(generateQuote());