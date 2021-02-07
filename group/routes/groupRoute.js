'use strict'
import {
  get_All_Group,
  create_Group,
  get_Group_By_Id,
  update_Group,
  delete_Group,
} from '../controllers/groupController.js'
import { checkToken } from '../../auth/token_validation.js'
function routeGroup(app) {
  // API Routes
  app
    .route('/group')
    .get(checkToken, get_All_Group)
    .post(checkToken, create_Group)

  app
    .route('/group/:id')
    .get(checkToken, get_Group_By_Id)
    .put(checkToken, update_Group)
    .delete(checkToken, delete_Group)
}
export default routeGroup
