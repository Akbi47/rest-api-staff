'use strict';
import {get_All_Staff, create_Staff, get_Staff_By_Id, update_Staff, delete_Staff} from '../controllers/appController.js';
function routes(app) {
   

   // API Routes
   app.route('/staff')
       .get(get_All_Staff)
       .post(create_Staff);

   app.route('/staff/:id')
       .get(get_Staff_By_Id)
       .put(update_Staff)
       .delete(delete_Staff);
};
export default routes