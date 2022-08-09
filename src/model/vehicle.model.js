const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
    vehicleNo: { type: String, required: true },
    vehicleType: { type: String, required: true},
    fuelType: { type: String, required: true},
    ownerName: {type:String, required: true},
    registeredYear: {type:Number, required: true},
});

const Vehicle = mongoose.model('vehicle', VehicleSchema);
module.exports = Vehicle;