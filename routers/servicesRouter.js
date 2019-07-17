const express = require('express');
const router = express.Router();
const Desease = require('../models/Desease');
router.get("/",(req,res,next)=>{
    res.render("pages/services/home")
})

router.get('/deseasefinder',(req,res,next)=>{
    res.render("pages/services/deseaseFinder/home")
})

router.get('/deseasefinder/add',(req,res,next)=>{
    res.render("pages/services/deseaseFinder/addDesease")
})
router.post('/deseasefinder/add',async (req,res,next)=>{
    const {DeseaseName,Summary,Cause,Midiecnce,NaturalCare} = req.body;
    const desease = Desease({
        deseaseName : DeseaseName,
        summary : Summary,
        cause :Cause,
        medicine:Midiecnce,
        naturalCare:NaturalCare,
    })
    await desease.save();
    res.redirect("/services/deseasefinder/list")
})

router.get('/deseasefinder/update/:id',async (req,res,next)=>{
    const data = await Desease.findById({_id:req.params.id});
    res.render("pages/services/deseaseFinder/updateDesease",{data})
})

router.get('/deseasefinder/list',async (req,res,next)=>{
    const deseaseData = await Desease.find(); 
    res.render("pages/services/deseaseFinder/list",{deseaseData})
})

router.get('/malariadetection',(req,res,next)=>{
    res.render("pages/services/malariaDetection/home")
})

router.get("/deseasefinder/delete/:id",async (req,res,next)=>{
    await Desease.remove({_id:req.params.id});
    res.redirect("/services/deseasefinder/list")
})
module.exports = router;