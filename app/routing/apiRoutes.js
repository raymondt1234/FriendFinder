const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/survey", function (req, res) {
        res.json(friends);
    });

    app.post("/api/survey", function (res, req){
    });
};