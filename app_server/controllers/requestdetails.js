const mongoose =require('mongoose');
const requestu =mongoose.model('requestdetail');
const request =function(req,res){

    requestu.create({
    requesterdate: req.body.requesterdate,
    department: req.body.department,
    requestername:  req.body.requestername,
    title:  req.body.title,
    requestercontact:    req.body.contact,
    requesteraltcontact: req.body.altcontact,
    requesteremail:      req.body.requesteremail,
    noofvisitors: req.body.noofvisitors,
    gender: req.body.gender,
    firstname:  req.body.firstname,
    lastname:   req.body.lastname,
    organisation:req.body.organisation,
    contact:    req.body.contact,
    altcontact: req.body.altcontact,
    email:      req.body.email,
    arrivaldate: req.body.arrivaldate,
    arrivaltime: req.body.arrivaltime,
    purpose: req.body.purpose,
    pickupreq: req.body.pickupreq,
    pickupinfo:  req.body.pickupinfo,
    departuredate: req.body.departuredate,
    depaerturetime: req.body.departuretime,
    dropreq: req.body.dropreq,
    dropinfo:  req.body.dropinfo,
    meals: req.body.meals,
    },(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        } else{
           res
             .render('login.ejs');
        }
        
    });
};
module.exports={
   request 
};


 
