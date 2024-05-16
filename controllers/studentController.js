const db = require ('../models/indexStart')
const createError = require ('http-errors')



const Student = db.students

module.exports={
    addStudent:async(req, res,next)=>{
        try{
    let info = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        gender:req.body.gender
    }
    const addStore = await Student.create(info)
    res.status(200).send(addStore)
}
catch(error){
   next(error)
}
},

//delete students
deleteStudent :async(req,res,next)=>{
    try {
        let id = req.params.id

        await Student.destroy({where: {student_id: id}})
        res.status(200).send("student Deleted Successfully")
    }catch(error){
        next(error);
    }
},
getStudents:  async (req, res,next) => {
    try{
        let id = req.params.id
        let student = await Student.findone({where: {student_id: id}})

        if(!student){
            throw(createError(404, "student does not exist"))
        }
        res.status(200).send(student)
    }catch(error){
        next(error)
    }
},

getAllStudents:  async (req, res,next) => {
    try{
        let allstudents = await Student.findAll({})
        res.status(200).send(allstudents)
    }catch(error){
        next(error)
    }
},

updateStudent:async(req, res, next) => {
    try{
        let id = req.params.id
        const student = await Student.update(req.body, {where: {student_id: id} })
        if(!student){
            throw(createError(404, "student does not exist"))
        }
        res.status(200).send("student Updated Successfully")
    }catch(error){
        next(error)
    }

}
}