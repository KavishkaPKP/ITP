const ClassApp = require("../models/Student.model");

exports.AddstudentDetails = async function (req, res) {
  const newDetails = new ClassApp({
    lname:req.body.lname,
    fname:req.body.fname,
    email: req.body.email,
    date: req.body.date,
    birthDate:req.body.birthDate,
    uType:"Student",
    isAccepted:"0"
  });
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }

    ClassApp.createStudent(newDetails, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message,
        });
      else {
        return res.status(200).json({
          success: "true",
          code: "200",
          Data: data,
          message: "Data Inserted",
        });
      }

    }
    );
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};



exports.getAllStudentNotaccepted = async function (req, res) {
  try {
    ClassApp.findAllNotacceptedStudent((err, data) => {
      return res.status(200).json({
        data: data,
        message: "All not accepted student Received",
      });
    });
  } catch (e) {
    return res.status(400).json({

      message: e.message,
    });
  }
};


exports.getAllStudentaccepted = async function (req, res) {
  try {
    ClassApp.findAllacceptedStudent((err, data) => {
      return res.status(200).json({
        data: data,
        message: "All  accepted student Received",
      });
    });
  } catch (e) {
    return res.status(400).json({

      message: e.message,
    });
  }
};

// exports.getAllDeatilsByID = async function (req, res) {
//   try {
//     Post.findPostsByID(req.params.id,(err, data) => {
//       return res.status(200).json({  
//         data: data,
//         message: "All Users Received",
//       });
//     });
//   } catch (e) {
//     return res.status(400).json({

//       message: e.message,
//     });
//   }
// };








exports.updateEnrollDetails = async function (req, res) {

  try {
    ClassApp.UpdateEnroll(req.params.id, req.body.isAccepted,(err, result) => {
      //   if(err){
      //   res.status(500).send({
      //     message: err.message,
      //   });
      // }
      return res.status(200).json({
        data: result,
        message: "Data is updated",
      });
    });
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    });
  }
};



exports.updateClassApplicationDetails = async function (req, res) {

  try {
    ClassApp.UpdateClassAppli(req.params.id, req.body.Name,req.body.address,req.body.items,req.body.Pnumber,(err, result) => {
      //   if(err){
      //   res.status(500).send({
      //     message: err.message,
      //   });
      // }
      return res.status(200).json({
        data: result,
        message: "Data is updated",
      });
    });
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    });
  }
};

exports.getAllDeatilsByID = async function (req, res) {
  try {
    ClassApp.findPostsByID(req.params.id,(err, data) => {
      return res.status(200).json({  
        data: data,
        message: "All Data Received",
      });
    });
  } catch (e) {
    return res.status(400).json({

      message: e.message,
    });
  }
};






//   exports.deleteUserDetails = async function (req, res) {

//     try {
//       Announsment.DeletebyID(req.params.id, (err, result) => {
//         return res.status(200).json({
//           data: result,
//           message: "Announsment is deleted",
//         });
//       });
//     } catch (e) {
//       return res.status(400).json({
//         message: e.message,
//       });
//     }
//   };