const routes = require('express').Router();

// const utils = require('../../lib/utils');
var studentController = require('../../controllers/student.controller');



routes.post('/addStudent',  studentController.AddstudentDetails);

routes.get('/getAllStudentNotaccepted',  studentController.getAllStudentNotaccepted);
routes.get('/getAllStudentaccepted',  studentController.getAllStudentaccepted);


routes.get('/searchDetails/:id',  studentController.getAllDeatilsByID);



routes.put('/updateEnrollDetails/:id',  studentController.updateEnrollDetails);
routes.put('/updateClassApplicationDetails/:id',  studentController.updateClassApplicationDetails);



// routes.delete('/deleteUserDetails/:id',  AnnousmentController.deleteUserDetails);

  

  
  
module.exports = routes;



