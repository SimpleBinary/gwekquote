<script>
    import statistics from "$lib/stores/statistics.js";

    let currentStats = $statistics;

    $: currentStats, statistics.set(currentStats);

    function updateMaxStreak() {
        currentStats.maxStreak = 1
    }

    function calculateStreak(dates) {
        let streak = 1

        for (let i = 0; i < dates.length; i++) {
            if (dates[i] === dates[i + 1] + 86400000) {
                streak += 1
            } else {
                if (streak > currentStats.maxStreak) {
                    updateMaxStreak()
                }

                return streak;
            }
        }

        return 0
    }
</script>

<div class="main">
    <ul>
        <li><h2>Quotes Viewed: { currentStats.list.length }</h2></li>
        <li><h2>Current Streak: { calculateStreak(currentStats.timeStamps.reverse()) }</h2></li>
        <li><h2>Max Streak: { currentStats.maxStreak }</h2></li>
        <li><h2>Times Opened: { currentStats.timesOpened }</h2></li>
    </ul> 
</div>