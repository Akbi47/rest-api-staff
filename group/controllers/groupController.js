import Group from '../models/groupModel.js'

export function get_All_Group(req, res) {
  Group.getAllGroup(function (err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

export function create_Group(req, res) {
  Group.addGroup(req.body, function (err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(req.body)
    }
  })
}

export function get_Group_By_Id(req, res) {
  if (req.params.id) {
    Group.getGroupById(req.params.id, function (err, data) {
      if (err) {
        res.json(err)
      } else {
        res.json(data)
      }
    })
  }
}

export function update_Group(req, res) {
  Group.updateGroup(req.params.id, req.body, function (err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

export function delete_Group(req, res) {
  Group.deleteGroup(req.params.id, function (err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}
