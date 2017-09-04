import { Patients } from '../models/Patients';
import { } from 'mongoose';
export  let resolvers = {
    Query:{
        patients : async (root, data, { Patients })=>{
            let patients = await Patients.find({});
            return patients;
        },
        doctors : async (root, data, { Doctors })=>{
            let doctors = await Doctors.find({});
            return doctors;
        },
        patient: async (root , data, { Patients })=>{
            let patient = Patients.findOne({_id:data.id}).exec();
            return patient; 
        },
        doctor: async (root , data, { Doctors })=>{
            let patient = Doctors.findOne({_id:data.id}).exec();
            return patient; 
        }
    },
    Mutation : {
        createPatient: async (root,data,{ Patients })=>{
            let { name , age , disease } = data;
            let patient = await new Patients({
                name : name,
                age : age,
                disease: disease
            }).save()
            return patient;
        },
        createDoctor:async (root,data,{ Doctors })=>{
            console.log("sdad", data)
            let { name , age , speciality } = data;
            let doctor = await new Doctors({
                name,
                age,
                speciality
            }).save();
            return doctor;
        }
    }

}