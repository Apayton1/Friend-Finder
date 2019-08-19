// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friendData = require('../data/friends.js');
var express = require("express");




module.exports = function (app) {
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req, res) => {
        var yourMatch = {
            name: "",
            photo: "",
            difference: 1000
        };
        

        var userData = req.body;
        var userScores = userData.answers;
        var totalDifference = 0;

        for (var i = 0; i < friendData.length; i++) {
            totalDifference = 0;
            var currentFriend = friendData[i];
            console.log(currentFriend.name);
            console.log(currentFriend.scores);

            for (var j = 0; j < 10; j++) {
                var userScore = userScores[j];
                var friendScore = currentFriend.scores[j];
                totalDifference += Math.abs( userScore - friendScore );
                //totalDifference = totalDifference + Math.abs( userScore - friendScore );
            };

            if(totalDifference <= yourMatch.difference) {

                yourMatch.name = currentFriend.name;
                yourMatch.photo = currentFriend.photo;
                yourMatch.difference = totalDifference;
            };
        };
        

        /// Add the current user to the collection of users/friends
        friendData.push(userData);

        res.json(yourMatch);
    });  
}