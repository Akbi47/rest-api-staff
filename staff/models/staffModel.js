import db from '../../config/db.js'

const Staff = {
  getAllStaff: function (callback) {
    return db.query('SELECT * from staff', callback)
  },
  getStaffById: function (id, callback) {
    return db.query('select * from staff where Id=?', [id], callback)
  },
  getStaffByGroup: function (groupid, callback) {
    return db.query('select * from staff where groupid=?', [groupid], callback)
  },
  getStaffByEmail: function (email, callback) {
    return db.query('select * from staff where email=?', [email], callback)
  },
  addStaff: function (staff, callback) {
    return db.query(
      'Insert into staff(firstname,lastname,password,gender,phone,email,role,groupid) values(?,?,?,?,?,?,?,?)',
      [
        staff.firstname,
        staff.lastname,
        staff.password,
        staff.gender,
        staff.phone,
        staff.email,
        staff.role,
        staff.groupid,
      ],
      callback
    )
  },
  deleteStaff: function (id, callback) {
    return db.query('delete from staff where Id=?', [id], callback)
  },
  updateStaff: function (id, staff, callback) {
    return db.query(
      'update staff set firstname=?,lastname=?, password=?, gender=?, phone=?, email=?, role=?, groupid=? where Id=?',
      [
        staff.firstname,
        staff.lastname,
        staff.password,
        staff.gender,
        staff.phone,
        staff.email,
        staff.role,
        staff.groupid,
      ],
      callback
    )
  },
}

export default Staff
