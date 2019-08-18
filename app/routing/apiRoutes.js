// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friendData = require('../data/friends.js');
var express = require("express");

module.exports = function (app) {
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post("api/friends", (req, res) => {
        var yourMatch = {
            name: "",
            photo: "",
            difference: 1000
        };


        var userResponses = req.body;
        var userScores = userData.scores;
        var userName = userData.name;
        var userPic = userData.photo;
        var totalDifference = 0;

        // userResponses.forEach(current => {

        // });

        // Array.prototype.forEach = function( callback ){
        //     var array = this;
        //     for (var i = 0; i < array.length; i++){
        //         callback( array[i] );
        //     }
        // }
        for (var i = 0; i < friendData.length; i++) {
            var current = userResponses[i];
            console.log(friends[i].name);
            console.log(friends[i].score);
            totalDifference = 0;

            for (var j = 0; j < 10; j++) {

                if(totalDifference <= youMatch.difference) {

                    yourMatch.name = friends[i].name;
                    yourMatch.photo = friends[i].photo;
                    yourMatch.difference = totalDifference;
                };

                friends.push(userData);

                res.json(yourMatch);



            };
        };
    });  
}