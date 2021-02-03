
import Staff from '../models/appModel.js';

export function get_All_Staff(req, res) {
    Staff.getAllStaff(function(err, staff) {

        if (err){
            res.json(err);
        }
         else{
             res.json(staff)
         }
    });
};

export function create_Staff(req, res) {
    Staff.addStaff(req.body,function(err,staff){
        if(err){
            res.json(err);
        } else {
            res.json(req.body);
        }
    })
};


export function get_Staff_By_Id(req, res) {
    if(req.params.id){
        Staff.getStaffById(req.params.id,function(err,data){
            if (err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    }
};


export function update_Staff(req, res) {
    
        Staff.updateStaff(req.params.id,req.body,function(err,data){
            if (err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    
};


export function delete_Staff(req, res) {


    Staff.deleteStaff(req.params.id, function(err, data) {
        if (err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
};
