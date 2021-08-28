const Contact = require("../models/Contact");

exports.posContact = async (req, res) => {
  try {
    const newContact = new Contact({ ...req.body });
    if (!req.body.email) {
      res.status(400).send({ message: "email is required check again" });
      return;
    }
    const user = await Contact.findOne({ email: req.body.email });
    if (user) {
      res.status(400).send({ message: "user already exist" });
      return;
    }

    let response = await newContact.save();
    res.send({ reponse: response, message: "contact saved" });
  } catch (error) {
    res.status(400).send("can not save it ");
  }
};
exports.getAllContacts = async (req, res) => {
  try {
    let result = await Contact.find();
    res.send({ reponse: result, message: "getted all contacts" });
  } catch (error) {
    res.status(400).send("can not get contacts");
  }
};
exports.getOneContact = async (req, res) => {
  try {
    let result = await Contact.findOne({ _id: req.params.id });
    res.send({ reponse: result, message: "getted one contact" });
  } catch (error) {
    res.status(400).send("can not get this contact");
  }
};
exports.deleteOneContact = async (req, res) => {
  try {
    let result = await Contact.deleteOne({ _id: req.params.id });
    result.deletedCount
      ? res.send({ reponse: result, message: "contact deleted" })
      : res.send("there is no user with this id");
  } catch (error) {
    res.status(400).send("can not deleted contact");
  }
};
exports.updateContact = async (req, res) => {
  try {
    let result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    result.modifiedCount
      ? res.send({ message: "user update" })
      : res.send({ message: "Contact already updated" });
  } catch (error) {
    res.status(400).send("not update");
  }
};
