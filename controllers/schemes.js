const Scheme = require("../models/scheme")

const getAllSchemes = async (req,res) =>{

     const Schemes = await Scheme.find({});

     res.status(200).json({Schemes});
};


module.exports = {getAllSchemes}