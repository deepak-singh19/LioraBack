const { Router } = require("express");
const router = Router();
const User = require("../db/user-schema");

router.post("/enroll", async(req, res)=>{
    const {firstName, lastName, location, duration, course, calendarData} = req.body;

    await User.create({
        firstName,
        lastName,
        location,
        duration, course,calendarData
    });

    res.status(200).json({mssg:"User Created"});

})

module.exports= router;
