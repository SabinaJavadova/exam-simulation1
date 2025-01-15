const modelProduct = require("../model/index");

const getAllData = async (req, res) => {
  try {
    const product = await modelProduct.find();
    if (!product) {
      res.status(404).json({ message: "not found!" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getDataById = async (req, res) => {
  const id = req.params.id
  try {
    const product = await modelProduct.findById(id);
    if (!product) {
      res.status(404).json({ message: "not found!" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteData = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await modelProduct.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: "not found!" });
    }
    res.status(200).json({ message: "deleted", deleted: deleted });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const postData = async (req, res) => {
  try {
    const createData = modelProduct({ ...req.body });
    await createData.save();
    res.json({ message: "added", createData: createData });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const putData = async (req, res) => {
  const id = req.params.id;
  try {
    const update = modelProduct.finByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!update) {
      res.status(404).json({ message: "not found!" });
    }
    res.status(200).json({ message: "updated!", update: update });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllData,
  deleteData,
  postData,
  putData,
  getDataById
};
