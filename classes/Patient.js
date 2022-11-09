const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    personal_details: { type: Array, required: true },
    medical_history: { type: String, required: true },
    medical_prescription: { type: Array, required: true },
    current_medical_inventory: { type: Array, required: true },
},
{timestamps: true});
export default mongoose.models.Patient || mongoose.model('Reminder', PatientSchema);