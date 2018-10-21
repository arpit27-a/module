const mongoose =require('mongoose');
const requestu =mongoose.model('visitordetail');
const visitor =function(req,res){
    requestu.create({
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
    pickuplocation: req.body.pickuplocation,
    pickuptransportcoordinator: req.body.pickuptransportcoordinator,
    pickuptransportcoordinatorphoneno: req.body.pickuptransportcoordinatorphoneno,
    pickupperson: req.body.pickupperson,
    pickuppersonphoneno: req.body.pickuppersonphoneno,
    pickupvehicletype: req.body.pickupvehicletype,
    pickupvehiclecapacity: req.body.pickupvehiclecapacity,
    dropvehiclenumber: req.body.pickupvehiclenumber,
    departuredate: req.body.departuredate,
    depaerturetime: req.body.departuretime,
    dropreq: req.body.dropreq,
    dropinfo:  req.body.dropinfo,
    droplocation: req.body.droplocation,
    droptransportcoordinator: req.body.droptransportcoordinator,
    droptransportcoordinatorphoneno: req.body.droptransportcoordinatorphoneno,
    droppperson: req.body.dropupperson,
    droppersonphoneno: req.body.droppersonphoneno,
    dropvehicletype: req.body.dropvehicletype,
    dropvehiclecapacity: req.body.dropvehiclecapacity,
    dropvehiclenumber: req.body.dropvehiclenumber,
    
    },(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        } else{
           res
             .render('requirment');
        }
        
    });
};
module.exports={
   visitor 
};