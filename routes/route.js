const express = require('express')

const router = express.Router()

const Registration = require('../controller/Registration')
const MembershipDetails = require('../controller/MembershipDetails')
const AllActiveMembers = require('../controller/allActiveMembers')
const CancelMembership = require('../controller/CancelMembership')
const ModifyMembership = require('../controller/ModifyMembership')


router.post('/api/register-membership',    Registration)         
router.get('/api/membership-details', MembershipDetails)  
router.get('/api/active-members',      AllActiveMembers)       
router.get('/api/cancel-membership',  CancelMembership)   
router.get('/api/modify-membership',  ModifyMembership)  



module.exports = router