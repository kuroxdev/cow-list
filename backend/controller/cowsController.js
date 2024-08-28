const Cows = require("../models/CowModel");

module.exports = {
  getAllCows: (req, res) => {
    Cows.findAll()
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).send(err));
  },
  addCow: (req, res) => {
    Cows.create(req.body)
      .then(() => res.send("a cow is  inserted"))
      .catch((err) => res.status(500).send(err));
  },
  updateOne: (req, res) => {
    const { id } = req.params;
    Cows.update(req.body, {
      where: {
        id: id,
      },
    })
      .then(() => res.send("a cow is  updated"))
      .catch((err) => res.status(500).send(err));
  },
  deleteOne: (req, res) => {
    const { id } = req.params;
    Cows.destroy({
      where: {
        id: id,
      },
    })
      .then(() => res.send("a cow is  deleted"))
      .catch((err) => res.status(500).send(err));
  },
};
