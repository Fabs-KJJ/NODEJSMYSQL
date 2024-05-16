const express = require ('express')
const routes = express.Router();
const studentController = require ('../controllers/studentController')

routes.post ('/addStudent',studentController.addStudent)
routes.delete('/deleteStudent/:id',studentController.deleteStudent)
routes.patch('/updateStudents/:id', studentController.updateStudent)
routes.get('/getstudents', studentController.getStudents)
routes.get('getallstudents', studentController.getAllStudents)
module.exports = routes