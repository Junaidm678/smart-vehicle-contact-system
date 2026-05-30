const express = require("express");
const router = express.Router();
const { registerUser, getUserByQR } = require("../controllers/userController");
const { getEmergencyContact } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const { getMyVehicle } = require("../controllers/userController");


router.post("/register", authMiddleware, registerUser);
router.get("/emergency/:id", getEmergencyContact);
router.get("/me", authMiddleware, getMyVehicle);

router.get("/:id", getUserByQR);

module.exports = router;