const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitordetails = new Schema({
    gender:{
        type: String,
    },

    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    organistation:{
        type: String,
    },
    contact:{
        type: String,
    },
    altcontact:{
        type: String,
    },
    email:{
        type: String,
    },
    arrivaldate:{
        type: Date,
    },
    arrivaltime:{
        type: String,
    },
  
    purpose:{
        type: String,
    },
    pickupreq:{
        type: String,
    },
    pickupinfo:{
        type: String,
    },
    pickuplocation:{
        type: String,
    },
    pickuptransportcoordinator:{
        type: String,
    },
    pickuptransportcoordinatorphoneno:{
        type: String,
    },
    pickupperson:{
        type: String,
    },
    pickuppersonphoneno:{
        type: String,
    },
    pickupvehicletype:{
        type: String,
    },
    pickupvehiclecapacity:{
        type: String,
    },
    pickupvehiclenumber:{
        type: String,
    },
    departuredate:{
        type: String,
    },
    departuretime:{
        type: String,
    },
    dropreq:{
        type: String,
    },
    dropinfo:{
        type: String,
    },
    droplocation:{
        type: String,
    },
    droptransportcoordinator:{
        type: String,
    },
    droptransportcoordinatorphoneno:{
        type: String,
    },
    dropperson:{
        type: String,
    },
    droppersonphoneno:{
        type: String,
    },
    dropvehicletype:{
        type: String,
    },
    dropvehiclecapacity:{
        type: String,
    },
    pickupvehiclenumber:{
        type: String,
    },

})

module.exports = mongoose.model('visitordetail',visitordetails);