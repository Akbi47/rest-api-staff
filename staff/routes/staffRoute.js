'use strict'
import {
  get_All_Staff,
  create_Staff,
  get_Staff_By_Id,
  update_Staff_By_Id,
  delete_Staff_By_Id,
  get_Staff_By_Group,
  login,
} from '../../staff/controllers/staffController.js'
import { checkToken } from '../../auth/token_validation.js'
function routes(app) {
  // API Routes
  app
    .route('/staff')
    .get(checkToken, get_All_Staff)
    .post(checkToken, create_Staff)

  app
    .route('/staff/:id')
    .get(checkToken, get_Staff_By_Id)
    .put(checkToken, update_Staff_By_Id)
    .delete(checkToken, delete_Staff_By_Id)

  app.route('/staff/:groupid').get(checkToken, get_Staff_By_Group)
  app.route('/staff/login').post(login)
  // app.route('/staff/email').post(getStaff_ByEmail)
}
export default routes
