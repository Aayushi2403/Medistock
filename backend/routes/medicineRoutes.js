const express = require("express");
const router = express.Router();

const {
  addMedicine,
  getMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
} = require("../controllers/medicineController");

router.post("/", addMedicine);
router.get("/", getMedicines);
router.get("/:id", getMedicineById);
router.put("/:id", updateMedicine);
router.delete("/:id", deleteMedicine);

module.exports = router;