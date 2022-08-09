const Vehicle = require("../model/vehicle.model");


const registerVehicle = async (req, res) => {
    if (req.body) {
        const vehicle = new Vehicle(req.body);
        await vehicle.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}



const getAllVehicles = async (req, res) => {
    await Vehicle.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

const updateVehicle = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await Vehicle.findByIdAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(err);
            });
    }
}

const deleteVehicle = async (req, res) => {
    await Vehicle.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send({ status: "Deleted" });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };


module.exports = {
    registerVehicle,
    getAllVehicles,
    updateVehicle,
    deleteVehicle,
    
}