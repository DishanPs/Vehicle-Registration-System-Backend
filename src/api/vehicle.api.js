const express = require('express');
const router = express.Router();
const VehicleController = require('../controller/vehicle.controller');

module.exports = function (){
    router.post('/', VehicleController.registerVehicle);
    router.put('/:id', VehicleController.updateVehicle);
    router.delete('/:id', VehicleController.deleteVehicle);
    router.get('/', VehicleController.getAllVehicles);
    return router;
}