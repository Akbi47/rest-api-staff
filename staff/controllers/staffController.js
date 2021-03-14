import Staff from '../models/staffModel.js'
import { hashSync, genSaltSync, compareSync } from 'bcrypt'
import jwtSign from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
// get all
export function get_All_Staff(req, res) {
  Staff.getAllStaff(function (err, staff) {
    if (err) {
      res.json(err)
    } else {
      res.json(staff)
    }
  })
}
// create
export function create_Staff(req, res) {
  const salt = genSaltSync(10)
  req.body.password = hashSync(req.body.password, salt)
  Staff.addStaff(req.body, function (err, result) {
    if (err) {
      res.json(err)
    } else {
      res.json(req.body)
    }
  })
}
// get staff by email - test function
export function getStaff_ByEmail(req, res) {
  if (req.body.email) {
    Staff.getStaffByEmail(req.body.email, function (err, result) {
      if (err) {
        res.json(err)
      } else {
        // bodyResponse = JSON.parse(result)
        // res.json(bodyResponse[0].password)
        res.json(result[0].password)
      }
    })
  } else {
    console.log('error email')
    res.json(result)
  }
}
// login
export function login(req, res) {
  if (req.body.email) {
    Staff.getStaffByEmail(req.body.email, function (err, results) {
      if (err) {
        res.json(err)
      }
      if (!results) {
        return res.json({
          success: 0,
          data: 'Invalid email or password',
        })
      }
      const result = compareSync(req.body.password, results[0].password)
      if (result) {
        results[0].password = undefined

        const jwt = jwtSign.sign(
          { result: results[0].id },
          process.env.SECRET_KEY,
          {
            expiresIn: '1h',
          }
        )
        return res.json({
          token: jwt,
        })
      } else {
        console.log('error 3 here')
        return res.json({
          success: 0,
          data: 'Invalid email or password',
        })
      }
    })
  } else {
    console.log('email wrong')
    res.json({
      error: 'wrong email',
    })
  }
}

// get staff by field
export function get_Staff_By_Id(req, res) {
  if (req.params.id) {
    Staff.getStaffById(req.params.id, function (err, data) {
      if (err) {
        res.json(err)
      } else {
        res.json(data)
      }
    })
  }
}
export function get_Staff_By_Group(req, res) {
  if (req.params.group) {
    Staff.getStaffByGroup(req.params.group, function (err, data) {
      if (err) {
        res.json(err)
      } else {
        res.json(data)
      }
    })
  }
}
// update
export function update_Staff_By_Id(req, res) {
  Staff.updateStaff(req.params.id, req.body, function (err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}
// delete
export function delete_Staff_By_Id(req, res) {
  Staff.deleteStaff(req.params.id, function (err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}
