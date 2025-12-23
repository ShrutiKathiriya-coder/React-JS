const express = require("express");
const router = express.Router();
const gymController = require("../controller/gym.controller");

// CRUD Routes
router.post("/add", gymController.addMember);
router.get("/", gymController.getAllMembers);
router.get("/:id", gymController.getMemberById);
router.put("/:id", gymController.updateMember);
router.delete("/:id", gymController.deleteMember);

module.exports = router;
