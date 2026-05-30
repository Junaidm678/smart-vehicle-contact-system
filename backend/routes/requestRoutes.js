const express = require("express");
const router = express.Router();

const {
    createRequest,
    getRequests,
    approveRequest,
    rejectRequest
} = require("../controllers/requestController");
router.post("/create", createRequest);
const authMiddleware = require("../middleware/authMiddleware");



// NEW ROUTES
router.get("/", authMiddleware, getRequests);
router.put("/approve/:requestId", approveRequest);
router.put("/reject/:requestId", rejectRequest);

module.exports = router;