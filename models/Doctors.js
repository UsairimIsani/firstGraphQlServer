import mongoose, { connect, Schema } from 'mongoose';
let DoctorSchema = Schema({
    name: String,
    age:Number,
    speciality:String,
});
export let Doctors = mongoose.model('Doctors', DoctorSchema);
