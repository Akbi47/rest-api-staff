import db from './db.js';

const Staff = {
    getAllStaff: function(callback){
        return db.query("SELECT * from staff", callback);
    },
    getStaffById: function(id, callback){
        return db.query("select * from staff where Id=?",[id],callback);
    },
    addStaff: function(staff,callback){
        return db.query("Insert into staff(firstname,lastname,gender,phone,email,title,part) values(?,?,?,?,?,?,?)",[staff.firstname,staff.lastname,staff.gender,staff.phone,staff.email,staff.title,staff.part],callback);
    },
    deleteStaff: function(id,callback){
        return db.query("delete from staff where Id=?",[id],callback);

    },
    updateStaff: function(id,staff,callback){
        return db.query("update staff set firstname=?,lastname=?,gender=?, phone=?, email=?, title=?, part=? where Id=?",[staff.firstname,staff.lastname,staff.gender,staff.phone,staff.email,staff.title,staff.part,id],callback);
    }
}

export default Staff;