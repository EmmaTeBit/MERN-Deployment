const Pet = require("../models/pet.model");

const createNew = (request, response) => {
  Pet.create(request.body)
    .then((newPet) => {
      response.json({ newPet });
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};

const getAll = (request, response) => {
  Pet.find()
    .then((all) => {
      response.json(all);
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};

const getOne = (request, response) => {
  Pet.findOne({ _id: request.params.id })
    .then((queriedPet) => {
      response.json(queriedPet);
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};

const update = (request, response) => {
  Pet.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updated) => {
      response.json({ updated });
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};
const destroy = (request, response) => {
  Pet.deleteOne({ _id: request.params.id })
    .then((destroy) => {
      response.json({ destroy });
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};

module.exports = { createNew, getAll, getOne, update, destroy };
