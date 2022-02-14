const { Router } = require("express");
const {  createStudent, getAllStudents, getStudent, updateStudent, deleteStudent } = require("../controllers/student");
const router = Router();

router.route("").post(createStudent).get(getAllStudents);
router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
