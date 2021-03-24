const express = require('express');
const contacts = require('../models/contacts');
const router = express.Router();
var objectId = require('mongoose').Types.ObjectId;

const Contact = require('../models/contacts')

// retrieving data
router.get('/contacts', (req, res, next) => {
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

// retrieving data by id
router.get('/contacts/:id', (req, res) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send('No record found');
    
    Contact.findById(req.params.id, (err, contact) => {
        if(!err) {
            res.json(contact);
        }
        else {
            console.log('Error in Retrieving Contact: '+ JSON.stringify(err, undefined, 2));
        }
    })
})

// add contact
router.post('/contact', (req, res, next) => {
        let newContact = new Contact({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        phone : req.body.phone
    });

    newContact.save((err, contact) =>{
        if(err){
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'Contact added successfuly'});
        }
    })
});

// delete contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{ 
            res.json(result);
        }
    })
});

// update contact
router.put('/contact/:id', (req, res) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send('No record found');

    var cntct = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
    };

    Contact.findByIdAndUpdate(req.params.id, {$set: cntct}, {new : true}, (err, contact) => {
        if(!err) {
            res.json(contact);
        }
        else {
            console.log('Error in Updating Contact: '+ JSON.stringify(err, undefined, 2));
        }
    });
})

module.exports = router;