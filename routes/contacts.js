const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const controllers = require("../controllers/contact.controllers");
// test Routing
router.get("/hello", (req, res) => {
  res.send("hello routing");
});
//@POST method
//@decription post a contact
//@path : http://localhost:5000/api/contact/
//Params Body
router.post("/", controllers.posContact);
//@GET method
//@decription GET all contact
//@path : http://localhost:5000/api/contact/
router.get("/", controllers.getAllContacts);
//@GET method
//@decription GET one contact
//@path : http://localhost:5000/api/contact/:id
//@Params id
router.get("/:id", controllers.getOneContact);
//@Method Delete
//@des delete one contact by id
//@path : http://localhost:5000/api/contact/:id
//@Params id
router.delete("/:id", controllers.deleteOneContact);
//@Method PUT
//@des PUT one contact by id
//@path : http://localhost:5000/api/contact/:id
//@Params id , body
router.put("/:id", controllers.updateContact);

module.exports = router;
