const { findByIdAndDelete } = require("../models/Student");
const StudentSchema = require("../models/Student");

// !Fetching ALL Students DATA
exports.getAllStudents = async (req, res) => {
  try {
    let payload = await StudentSchema.find({});
    res.status(200).json({ message: "featched all Data", payload });
  } catch (err) {
    res.status(501).json({ message: "Server Error" });
  }
};

// !Fetching a Particular Student DATA
exports.getStudent = async (req, res) => {
  try {
    let payload = await StudentSchema.findOne({ _id: req.params.id });
    res.status(200).json({ message: "featched students".payload });
  } catch (err) {
    res.status(501).json({ message: "Server Error" });
  }
};

// !Creating a Student DATA
exports.createStudent = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = {
      name,
      std_id,
      email,
      courses,
    };
    let data = await StudentSchema.create(payload);
    res.status(201).json({ message: " Successfully Student Created✌", data });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "SERVER ERROR" });
  }
};

// !Updating a Particular Student DATA
exports.updateStudent = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = await StudentSchema.findByIdAndUpdate(
      req.params.id,
      {
        name,
        std_id,
        email,
        courses,
      },
      { new: true }
    );
    await payload.save();
    res.status(201).json({ message: "Successfully Student updated", payload });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "SERVER ERROR"});
  }
};

// !Deleting a Particular Student DATA 
exports.deleteStudent = async (req, res) => {
  try {
    await StudentSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Successfully Student Deleted"});
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "SERVER ERROR" });
  }
};

// /* HTTP REQUEST GET
// @ACCESS PUBLIC
// @URL api/students
// */
// exports.getStudents = (req, res) => {
//   res.send("hi shivakumar how are you?");
// };

// exports.createStudent = async (req, res) => {
//     try {
//         let { name, std_id, email, courses } = req.body;
//         let payload = {
//           name,
//           std_id,
//           email,
//           courses,
//         };
//         let data = await StudentSchema.create(payload);
//         res
//           .status(201)
//           .json({ message: " Successfully Student Created✌", data });
//     } catch (err {
//         console.log(err);
//         res.status(501).json({ message: "SERVER ERROR", data });
//     }
// };
