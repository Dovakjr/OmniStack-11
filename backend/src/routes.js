const express = require("express");
const ongController = require("./controllers/OngController");
const incidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/ongs", ongController.create);
routes.get('/ongs', ongController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete)

routes.post('/sessions', SessionController.create);

module.exports = routes;
