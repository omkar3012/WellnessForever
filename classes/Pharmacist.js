const mongoose = require('mongoose');

const PharmacistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    contact_number: { type: String},
    medicines: { type: Array },
},
{timestamps: true});
export default mongoose.models.Pharmacist || mongoose.model('Reminder', PharmacistSchema);