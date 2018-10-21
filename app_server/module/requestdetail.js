const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const requestdetails = mongoose.Schema({ 

  requesterdate:{
      type: String,
  },
    department:{
      type: String,
    },
    requestername:{ 
      type: String,
    },
    contact:{
      type: String,
   },
   title:{
    type: String,
 },
   altcontact:{
      type: String,
   },
   requesteremail:{
      type:String,
   },
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
meals: {
  type: String,
},

  
})

module.exports = mongoose.model('requestdetail',requestdetails );