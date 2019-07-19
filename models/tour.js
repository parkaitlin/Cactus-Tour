const mongoose = require('mongoose');

const TourSchema = mongoose.Schema({
    eventStartDate: String,
    eventEndDate: String,
    venue: {type: String},
    city: String,
    state: String,
    purse: String, // $
    startTime: String,
    notes: {type: String, default: ''},
    status: {type: Boolean, default: true}, // active or cancelled
    registeredPlayers: [],
    teeTimes: [], // array of objects {time: , players: [player1, player2, player3]}
    createdBy: String
    // firstPlace: String, // $
    // leaderboard: add later will probably be an array of objects
})

module.exports = mongoose.model('Tour', TourSchema);