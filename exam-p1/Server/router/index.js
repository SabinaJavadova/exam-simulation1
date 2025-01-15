const express = require('express')

const {getAllData, deleteData, postData, putData, getDataById} = require("../controller/index");


const router = express.Router();

router.get("/",getAllData);
router.get("/:id",getDataById);
router.delete("/:id",deleteData);
router.post("/",postData);
router.post("/:id",putData);



module.exports =router;