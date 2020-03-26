//Leaderboard functions

const createLeaderboard = function() {
    const scores = JSON.parse(window.localStorage.getItem("leaderboard")) || [];

    scores.sort(function(a, b) {
        return b.score - a.score;
    });

    scores.forEach(function(result) {
        const leaderboardSlot = document.createElement("li");
        leaderboardSlot.textContent = result.initials + " - " + result.score;

        const leaderboardEl = document.getElementById("leaderboard");
        leaderboardEl.appendChild(leaderboardSlot);

    });
};

const clearScores = function() {
    window.localStorage.removeItem("leaderboard");
    window.location.reload();
}

document.getElementById("clear").onclick = clearScores;

createLeaderboard();
