const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        
        let userScores = req.body.scores;
        
        let bestMatch;

        let lowestDifference = 50;
        // Set to 50 so that the first friend will start as bestMatch until another friend scores lower.

        friends.forEach(friend => {
            let totalDifference = 0;
            for (let i = 0; i < friend.scores.length; i++) {
                totalDifference += Math.abs(friend.scores[i] - userScores[i]);
            }

            if (totalDifference < lowestDifference) {
                lowestDifference = totalDifference;
                bestMatch = friend;
            }
        });
        res.json(JSON.stringify(bestMatch));
    });
};