const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({

    name: { type: String, required: true },
    specialization: { type: String},
    address: { type: String },
    appointment_date: { type: Date },
},
{timestamps: true});
export default mongoose.models.Doctor || mongoose.model('Reminder', DoctorSchema);