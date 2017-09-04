import mongoose, { connect, Schema } from 'mongoose';
let PatientSchema = Schema({
    name: String,
    age:Number,
    disease:String,
});
export let Patients = mongoose.model('Patients', PatientSchema);
