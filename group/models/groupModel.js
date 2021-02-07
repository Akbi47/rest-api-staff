import db from '../../config/db.js'

const Group = {
  getAllGroup: function (callback) {
    return db.query('SELECT * from part', callback)
  },
  getGroupById: function (id, callback) {
    return db.query('select * from part where groupid=?', [id], callback)
  },
  addGroup: function (Group, callback) {
    return db.query(
      'Insert into part(groupid, part) values(?,?)',
      [Group.groupid, Group.part],
      callback
    )
  },
  deleteGroup: function (id, callback) {
    return db.query('delete from part where groupid=?', [id], callback)
  },
  updateGroup: function (id, Group, callback) {
    return db.query(
      'update part set groupid=? , part=?, where groupid=?',
      [Group.groupid, Group.part, id],
      callback
    )
  },
}

export default Group
