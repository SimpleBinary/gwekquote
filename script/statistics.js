function calculateStreak(dates) {
    let streak = 1

    for (let i = 0; i < dates.length; i++) {
        if (dates[i] === dates[i + 1] + 86400000) {
            streak += 1
        } else {
            if (streak > parseInt(localStorage.getItem("gwekquotes-max-streak"))) {
                localStorage.setItem("gwekquotes-max-streak", streak.toString());
            }

            return streak;
        }
    }
}

if (!localStorage.hasOwnProperty("gwekquotes")) {
    localStorage.setItem("gwekquotes", JSON.stringify([]));
}

if (!localStorage.hasOwnProperty("gwekquotes-dates")) {
    localStorage.setItem("gwekquotes-dates", JSON.stringify([]));
}

if (!localStorage.hasOwnProperty("gwekquotes-max-streak")) {
    localStorage.setItem("gwekquotes-max-streak", "0");
}

if (!localStorage.hasOwnProperty("gwekquotes-opened")) {
    localStorage.setItem("gwekquotes-opened", "0");
}


let number = JSON.parse(localStorage.getItem("gwekquotes")).length;
let dates = JSON.parse(localStorage.getItem("gwekquotes-dates")).reverse();
let currentStreak = calculateStreak(dates);
let maxStreak = localStorage.getItem("gwekquotes-max-streak");
let opened = localStorage.getItem("gwekquotes-opened");

document.getElementsByClassName("number")[0].textContent = `Quotes Viewed: ${number}`;
document.getElementsByClassName("streak")[0].textContent = `Current Streak: ${currentStreak}`;
document.getElementsByClassName("max-streak")[0].textContent = `Max Streak: ${maxStreak}`;
document.getElementsByClassName("opened")[0].textContent = `Times Opened: ${opened}`;