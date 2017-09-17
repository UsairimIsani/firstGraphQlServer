import { Router } from 'express';
import { allDoctors , deletePatient , allPatient ,getDoctor, getPatient,createDoctor,createPatient } from '../controllers'
let router = Router();
router.route('/patients').get(allPatient);
router.route('/getpatient').post(getPatient);
router.route('/doctors').get(allDoctors);
router.route('/getdoctor').post(getDoctor);
router.route('/createpatient').post(createPatient);
router.route('/deletepatient').post(deletepatient);
router.route('/createdoctor').post(createDoctor);
export default router;