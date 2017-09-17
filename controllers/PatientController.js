import { Doctors, Patients } from '../models'
export async function allPatient(req,res,next){
    let patients = await Patients.find().exec();
    res.json(patients);
}
export async function getPatient(req,res,next){
    let patient = await Patients.findOne({_id:req.body.id});
    res.json(patient);
}
export async function createPatient(req,res,next){
    let { name , age , disease } = req.body; 
    let newPatient = await new Patients({name , age , disease}).save();
    res.json(newPatient);
}
export async function deletePatient(req,res,next){
    let { id } = req.body; 
    let newPatient = await new Patients.findByIdAndRemove({_id:id}).exec();
    res.json(delPatient);
}