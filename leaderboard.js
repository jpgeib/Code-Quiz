//Leaderboard functions

const createLeaderboard = function() {
    const scores = JSON.parse(window.localStorage.getItem("score-table")) || [];

    scores.sort(function(a, b) {
        return b.score - a.score;
    });

    scores.forEach(function(result) {
        const leaderboardSlot = document.createElement("li");
        leaderboardSlot.textContent = result.user + " - " + result.score;

        const leaderboardEl = document.getElementById("score-table");
        leaderboardEl.appendChild(leaderboardSlot);

    });
};

const clearScores = function() {
    window.localStorage.removeItem("score-table");
    window.location.reload();
}

document.getElementById("clear").onclick = clearScores;

createLeaderboard();
