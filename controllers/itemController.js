const Item = require('../models/Item');

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.addItem = async (req, res) => {
  const newItem = new Item(req.body);
  const saved = await newItem.save();
  res.status(201).json(saved);
};

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
