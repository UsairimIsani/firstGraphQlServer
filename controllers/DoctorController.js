import { Doctors, Patients } from '../models'
export async function allDoctors(req,res,next){
    let doctors = await Doctors.find().exec();
   
    res.json(doctors);
}
export async function getDoctor(req,res,next){
    let doctor = await Doctors.findOne({_id:req.body.id});
    res.json(doctor);
}
export async function createDoctor(req,res,next){
    let { name , age , speciality } = req.body; 
    let newDoctor = await new Doctors({name , age , speciality}).save();
    res.json(newDoctor);
}