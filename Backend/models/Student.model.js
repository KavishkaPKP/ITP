const sql = require('./db.js');

const Student = function (user) {
  this.lname = user.lname;
  this.fname = user.fname;
  this.email = user.email;
  this.date = user.date;
  this.uType = user.uType;
  this.birthDate = user.birthDate
  this.isAccepted = user.isAccepted



};


Student.createStudent = (newdetails, result) => {
  sql.query('INSERT INTO user SET ?', newdetails, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err.message, '');
      return;
    }

    console.log('Add a New Student: ', { id: res.insertId, ...newdetails });
    result('', { id: res.insertId, ...newdetails });

  });
};



Student.findAllNotacceptedStudent = (result) => {
  sql.query("SELECT * FROM user WHERE isAccepted=0", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found not accepted student: ", res);
      result(null, res);
      return;
    }
    // not found User with the username
    result({ kind: "student not found" }, null);
  });
};


Student.findAllacceptedStudent = (result) => {
  sql.query("SELECT * FROM user WHERE isAccepted=1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found  accepted student: ", res);
      result(null, res);
      return;
    }
    // not found User with the username
    result({ kind: "student not found" }, null);
  });
};

//   Post.findPostsByID = (id, result) => {
//     sql.query(`SELECT * FROM posts WHERE id='${id}' `, (err, res) => {
//       if (err) {
//         result(err, "");
//         return;
//       }

//       if (res) {
//         result("Recived", res);
//         return;
//       }
//       // not found post with the id
//       result({ kind: "Recived Not Success" });
//     });
//   };





Student.UpdateEnroll = (id, isAccepted, result) => {
  console.log("ID", id)
  console.log("isAccepted", isAccepted)

  sql.query(`UPDATE user SET isAccepted='${isAccepted}' WHERE uid='${id}' `, (err, res) => {
    if (err) {
      result(err, "");
      return;
    }

    if (res) {
      result("Updated", res);
      return;
    }
    // not found post with the id
    result({ kind: "Update Not Success" });
  });
};


Student.UpdateClassAppli = (id, Name, address, items, Pnumber, result) => {
  console.log("ID", id)
  console.log("isEnroll", isEnroll)

  sql.query(`UPDATE class SET Name='${Name}', address='${address}, items='${items}', Pnumber='${Pnumber} 'WHERE id='${id}' `, (err, res) => {
    if (err) {
      result(err, "");
      return;
    }

    if (res) {
      result("Updated", res);
      return;
    }
    // not found post with the id
    result({ kind: "Update Not Success" });
  });
};



Student.findPostsByID = (id, result) => {
  sql.query(`SELECT * FROM user WHERE isAccepted = 1 AND fname='${id}' `, (err, res) => {
    if (err) {
      result(err, "");
      return;
    }

    if (res) {
      result("Recived", res);
      return;
    }
    // not found post with the id
    result({ kind: "Recived Not Success" });
  });
};





// Announsment.DeletebyID = (id, result) => {
//   sql.query(`DELETE FROM announcements WHERE id='${id}' `, (err, res) => {
//     if (err) {
//       result(err, "");
//       return;
//     }

//     if (res.length) {
//       result("", res);
//       return;
//     }
//     // not found post with the id
//     result({ kind: "Delete Not Success" }, "");
//   });  
// };

module.exports = Student;