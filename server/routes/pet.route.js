//-----------Change Controller/Route Name------------------------------------
const petController = require("../controllers/pet.controller");
module.exports = (app) => {
  app.post("/api/pet", petController.createNew);

  app.get("/api/pet", petController.getAll);
  app.get("/api/pet/:id", petController.getOne);

  app.put("/api/pet/:id", petController.update);

  app.delete("/api/pet/:id", petController.destroy);
};
